import React, { useEffect, useState } from "react";

const LastSalesPage = () => {
  const [sales, setSales] = useState();
  const [isLoading, SetIsLoading] = useState(false);

  useEffect(() => {
    SetIsLoading(true);

    fetch("https://nextjs-course-ea330-default-rtdb.firebaseio.com/sales.json")
      .then((res) => res.json())
      .then((data) => {
        const transformedSales = [];

        for (const key in data) {
          transformedSales.push({
            id: key,
            username: data[key].username,
            volume: data[key].volume,
          });
        }

        setSales(transformedSales);
        SetIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  if (!sales) {
    return <p>No data yet</p>;
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

export default LastSalesPage;
