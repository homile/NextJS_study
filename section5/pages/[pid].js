import React, { Fragment } from "react";

import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  return data;
};

export const getStaticProps = async (context) => {
  // 데이터를 사전 패칭하기 위해선 useRouter 대신 context에서 params를 가져온다.
  // useRoute는 컴포넌트 함수 안에서 사용가능하기 때문이다.
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  // fallback을 true로 설정할 경우 데이터가 없을 때 notFound 화면을 띄울 수 있도록 함.
  if (!product) {
    return { notFound: true };
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
};

// 동적 페이지에 대한 데이터를 사전 생성하기위함.
export const getStaticPaths = async () => {
  const data = await getData();

  const ids = data.products.map((product) => product.id);
  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathsWithParams,
    // 파일에서 찾을 수 없는 ID도 사전 랜더링을 할 수 있다. (true)
    // true로 설정할 경우 Server Error가 나옴.
    fallback: true,
  };
};

export default ProductDetailPage;
