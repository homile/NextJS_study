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
  return {
    props: {
      products: [{ id: "p1", title: "Product 1" }],
    },
  };
}

export default HomePage;
