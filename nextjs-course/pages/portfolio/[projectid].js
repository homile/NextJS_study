import React from "react";

// 대괄호를 사용하여 동적 라우팅을 지정한다.
// /portfolio/one, /portfolio/hello를 작성해도 해당 컴포넌트 페이지로 이동한다.
// /portfolio/list를 작성하면 list 페이지로 이동한다.

// 여러 종류의 데이터를 불러와야 하는 페이지를 생성할 때 동적 라우팅을 주로 사용한다.
// 온라이 스토어 상품, 블로그 게시글, 포트폴리오 페이지 등
const PortfolioProjectPage = () => {
  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
};

export default PortfolioProjectPage;
