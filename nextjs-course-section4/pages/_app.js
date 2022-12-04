import Layout from "../components/layout/layout";
import "../styles/globals.css";

// css 파일을 추가할 수 있다.
// next에는 css 모듈이 내장되어 있다.

// 루트 컴포넌트 파일로 여러 페이지 컴포넌트가 렌더링 되는 곳이다.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
