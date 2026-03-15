import { create } from "zustand";
import { useMemo } from "react";
import type { AlertPopupOptions } from "./PopupBase.types";

export type PopupType = "alert";
export type PopupStatus = "open" | "closing";

type AlertPopupItem = {
  id: string;
  type: "alert";
  status: PopupStatus;
  props: AlertPopupOptions;
};

export type PopupItem = AlertPopupItem;

export type PopupSnapshot = Pick<PopupItem, "id" | "type" | "status">;

type PopupStore = {
  items: PopupItem[];
  openAlert: (options: AlertPopupOptions) => string;
  closePopup: (id: string) => void;
  removePopup: (id: string) => void;
  closeAll: () => void;
};

function createPopupId(type: PopupType) {
  return `${type}-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

// set : store 상태를 바꾸는 함수
export const usePopupStore = create<PopupStore>()((set) => ({
  items: [],
  openAlert: (options) => {
    const id = options.id ?? createPopupId("alert");

    set((state) => {
      const isDuplicateId = state.items.some((item) => item.id === id);

      if (isDuplicateId) {
        throw new Error(
          `Popup with id "${id}" already exists. openAlert only creates new popups.`,
        );
      }

      return {
        items: [
          ...state.items,
          {
            id,
            type: "alert",
            status: "open",
            props: options,
          },
        ],
      };
    });

    return id;
  },
  closePopup: (id) => {
    set((state) => ({
      items: state.items.map((item) =>
        item.id === id
          ? {
              ...item,
              status: "closing",
            }
          : item,
      ),
    }));
  },
  removePopup: (id) => {
    set((state) => ({
      items: state.items.filter((item) => item.id !== id),
    }));
  },
  closeAll: () => {
    set((state) => ({
      items: state.items.map((item) => ({
        ...item,
        status: "closing",
      })),
    }));
  },
}));

export function usePopupItems() {
  return usePopupStore((state) => state.items);
}

export function usePopupStack() {
  const items = usePopupItems();

  return useMemo(
    () =>
      items.map(({ id, type, status }) => ({
        id,
        type,
        status,
      })),
    [items],
  );
}
