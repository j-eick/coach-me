// import "@/styles/globals.css";
// import "../styles/globalStyles";
import { GlobalStyle } from "../styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
