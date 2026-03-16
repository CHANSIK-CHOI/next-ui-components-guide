import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <div id="popup-root" className="popupPortal" />
        <div id="toast-root" className="toastPortal" />
        <NextScript />
      </body>
    </Html>
  );
}
