import "../styles/globals.css";

// css 파일을 추가할 수 있다.
// next에는 css 모듈이 내장되어 있다.
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
