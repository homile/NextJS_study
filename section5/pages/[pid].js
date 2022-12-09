import React, { Fragment } from "react";

import fs from "fs/promises";
import path from "path";

const ProductDetailPage = (props) => {
  const { loadedProduct } = props;

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
};

export const getStaticProps = async (context) => {
  // 데이터를 사전 패칭하기 위해선 useRouter 대신 context에서 params를 가져온다.
  // useRoute는 컴포넌트 함수 안에서 사용가능하기 때문이다.
  const { params } = context;

  const productId = params.pid;

  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);

  const product = data.products.find((product) => product.id === productId);

  return {
    props: {
      loadedProduct: product,
    },
  };
};

// 동적 페이지에 대한 데이터를 사전 생성하기위함.
export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { pid: "p1" } },
      { params: { pid: "p2" } },
      { params: { pid: "p3" } },
    ],
    fallback: false,
  };
};

export default ProductDetailPage;
