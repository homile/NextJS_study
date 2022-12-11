import React, { useEffect, useState } from "react";
import useSWR from "swr";

const LastSalesPage = (props) => {
  const [sales, setSales] = useState(props.sales);
  // const [isLoading, SetIsLoading] = useState(false);

  // 컴포넌트가 로딩되면 URL로 요청이 전송된다.
  const { data, error } = useSWR(
    "https://nextjs-course-ea330-default-rtdb.firebaseio.com/sales.json",
    (url) => fetch(url).then((res) => res.json())
  );

  useEffect(() => {
    if (data) {
      const transformedSales = [];

      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  // useEffect(() => {
  //   SetIsLoading(true);

  //   fetch("https://nextjs-course-ea330-default-rtdb.firebaseio.com/sales.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const transformedSales = [];

  //       for (const key in data) {
  //         transformedSales.push({
  //           id: key,
  //           username: data[key].username,
  //           volume: data[key].volume,
  //         });
  //       }

  //       setSales(transformedSales);
  //       SetIsLoading(false);
  //     });
  // }, []);

  if (error) {
    return <p>Failed to load.</p>;
  }

  if (!data && !sales) {
    return <p>Loading....</p>;
  }

  // nextjs는 사전 랜더링을 하기 때문에 에러가 나옴
  // 해당 에러를 해결하기 위해 데이터가 없는 경우의 위에 !sales와 같은 코드 작성
  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
};

// SSR방식과 CSR방식 결합
// DB의 값이 바뀌면 자동으로 클라이언트 화면에 랜더링
export const getStaticProps = async () => {
  const response = await fetch(
    "https://nextjs-course-ea330-default-rtdb.firebaseio.com/sales.json"
  );

  const data = await response.json();
  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }

  return { props: { sales: transformedSales } };
};

export default LastSalesPage;
