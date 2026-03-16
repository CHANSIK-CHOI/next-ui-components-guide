import { GuideShell } from "@/components/Guide";
import { PopupHost, ToastHost } from "@/components";
import "@/styles/style.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <PopupHost>
      <ToastHost>
        <GuideShell currentPath={router.pathname}>
          <Component {...pageProps} />
        </GuideShell>
      </ToastHost>
    </PopupHost>
  );
}
