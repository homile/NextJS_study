import React from "react";
import { useRouter } from "next/router";

// 경로: /clients/max(동적)/projects1(동적)
// 폴더명도 동적으로 접근할 수 있다.
const SelectClientPorjectPage = () => {
  const router = useRouter();

  console.log(router.query);

  return (
    <div>
      <h1>The Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
};

export default SelectClientPorjectPage;
