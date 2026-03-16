import { GuideShell } from "@/components/Guide";
import { PopupProvider, ToastProvider } from "@/components";
import "@/styles/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <PopupProvider>
      <ToastProvider>
        <GuideShell currentPath={router.pathname}>
          <Component {...pageProps} />
        </GuideShell>
      </ToastProvider>
    </PopupProvider>
  );
}
