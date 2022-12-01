import React from "react";
import { useRouter } from "next/router";

// 경로: /clients/max
const ClientProjectsPage = () => {
  const router = useRouter();

  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    // form을 작성하고 제출 후 페이지를 이동할 때 사용한다.
    router.push("/clients/max/project");
  };

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Laod Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
