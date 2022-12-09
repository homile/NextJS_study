// 파일 시스템모듈
// 브라우저 측 js가 파일 시스템에 접근할 수 없기 때문에 사용한다.
import fs from "fs/promises";
import path from "path";

import Link from "next/link";

const HomePage = (props) => {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
};

// 데이터를 사전 패칭하는 함수
// 일반적인 React에서는 useEffect를 사용했음.
// CSR 방식이 아닌 SSR 방식이기 때문에 사용자가 볼 수 없는 크리덴셜(credential)을 사용할 수 있다.
export async function getStaticProps() {
  console.log("(Re-)Generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  if (!data) {
    return {
      // 페이지 콘텐츠나 컴포넌트 콘텐츠를 렌더링하지않고
      // 다른 페이지로 리디렉션하는 설정
      redirect: {
        destination: "/no-data",
      },
    };
  }

  // 데이터가 없을 경우 404 페이지를 보여줌
  if (data.products.length === 0) {
    // notFound true -> 404 페이지
    return { notFound: true };
  }

  return {
    props: {
      products: data.products,
    },
    // 페이지를 재생성하는 시간 설정
    revalidate: 10,
  };
}

export default HomePage;
