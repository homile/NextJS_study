// 파일 시스템모듈
// 브라우저 측 js가 파일 시스템에 접근할 수 없기 때문에 사용한다.
import fs from "fs";
import path from "path";

const HomePage = (props) => {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>{product.title}</li>
      ))}
    </ul>
  );
};

// 데이터를 사전 패칭하는 함수
// 일반적인 React에서는 useEffect를 사용했음.
// CSR 방식이 아닌 SSR 방식이기 때문에 사용자가 볼 수 없는 크리덴셜(credential)을 사용할 수 있다.
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = fs.readFileSync(filePath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
  };
}

export default HomePage;
