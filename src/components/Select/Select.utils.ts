import type {
  GroupBase,
  OptionsOrGroups,
  SelectComponentsConfig,
  StylesConfig,
} from "react-select";
import type {
  MultiSelectValue,
  SelectOption,
  SingleSelectValue,
} from "./Select.types";

// Portal로 렌더링되는 menu가 기본 레이어 아래로 깔리지 않도록 최소 z-index를 보정합니다.
const MENU_PORTAL_Z_INDEX = 20;

// `react-select` option group(`{ label, options: [...] }`)인지 일반 option인지 구분합니다.
// 예시 입력:
// - { label: "서울", value: "seoul" }
// - { label: "국내", options: [{ label: "서울", value: "seoul" }] }
// 예시 반환:
// - 일반 option이면 false
// - group option이면 true
function isOptionGroup(
  item: SelectOption | GroupBase<SelectOption>,
): item is GroupBase<SelectOption> {
  return Array.isArray((item as GroupBase<SelectOption>).options);
}

// value를 option 객체로 다시 찾으려면 group 구조보다 "펼쳐진 option 목록"이 필요해서 평탄화합니다.
// 예시 입력:
// - [
//     { label: "국내", options: [{ label: "서울", value: "seoul" }] },
//     { label: "도쿄", value: "tokyo" },
//   ]
// 예시 반환:
// - [
//     { label: "서울", value: "seoul" },
//     { label: "도쿄", value: "tokyo" },
//   ]
function flattenOptions(
  options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>,
) {
  return options.flatMap((item) =>
    isOptionGroup(item) ? [...item.options] : [item],
  );
}

// 단일 선택은 외부 primitive value 하나를 실제 option 객체 하나로 역매핑합니다.
// 예시 입력:
// - options = [
//     { label: "서울", value: "seoul" },
//     { label: "도쿄", value: "tokyo" },
//   ]
// - value = "tokyo"
// 예시 반환:
// - { label: "도쿄", value: "tokyo" }
// 값이 없으면 null을 반환합니다.
export function getResolvedSingleValue(
  options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>,
  value: SingleSelectValue | undefined,
) {
  const flatOptions = flattenOptions(options);

  return flatOptions.find((option) => option.value === value) ?? null;
}

// 멀티 선택은 외부 primitive 배열을 option 객체 배열로 역매핑합니다.
// 예시 입력:
// - options = [
//     { label: "React", value: "react" },
//     { label: "TypeScript", value: "typescript" },
//     { label: "SCSS", value: "scss" },
//   ]
// - value = ["react", "scss"]
// 예시 반환:
// - [
//     { label: "React", value: "react" },
//     { label: "SCSS", value: "scss" },
//   ]
export function getResolvedMultiValue(
  options: OptionsOrGroups<SelectOption, GroupBase<SelectOption>>,
  value: MultiSelectValue | undefined,
) {
  const flatOptions = flattenOptions(options);
  const selectedValues = Array.isArray(value) ? value : [];

  return flatOptions.filter((option) => selectedValues.includes(option.value));
}

// 공통 UI 규칙으로 separator는 기본 제거하되, caller가 넘긴 custom component는 그대로 병합합니다.
// 예시 입력:
// - components = { DropdownIndicator: CustomDropdownIndicator }
// 예시 반환:
// - {
//     IndicatorSeparator: null,
//     DropdownIndicator: CustomDropdownIndicator,
//   }
export function getResolvedSelectComponents<IsMulti extends boolean>(
  components?: SelectComponentsConfig<SelectOption, IsMulti, GroupBase<SelectOption>>,
): SelectComponentsConfig<SelectOption, IsMulti, GroupBase<SelectOption>> {
  return {
    IndicatorSeparator: null,
    ...components,
  };
}

// caller가 넘긴 styles를 유지하면서, menuPortal의 z-index 보정만 공통 정책으로 덮어씁니다.
// 예시 입력:
// - styles = {
//     control: (base) => ({ ...base, minHeight: 64 }),
//   }
// 예시 반환:
// - 기존 control 스타일은 유지
// - menuPortal은 항상 { ...base, zIndex: 20 } 기준으로 계산
export function getResolvedSelectStyles<IsMulti extends boolean>(
  styles?: StylesConfig<SelectOption, IsMulti, GroupBase<SelectOption>>,
): StylesConfig<SelectOption, IsMulti, GroupBase<SelectOption>> {
  return {
    ...styles,
    menuPortal: (base, props) => {
      const nextBase = {
        ...base,
        zIndex: MENU_PORTAL_Z_INDEX,
      };

      return styles?.menuPortal ? styles.menuPortal(nextBase, props) : nextBase;
    },
  };
}
