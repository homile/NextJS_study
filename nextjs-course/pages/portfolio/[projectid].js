import React from "react";
// useRouter next hook : 함수형에서 사용가능
// withRouter : 클래스형에서 사용가능
import { useRouter} from "next/router";

// 대괄호를 사용하여 동적 라우팅을 지정한다.
// /portfolio/one, /portfolio/hello를 작성해도 해당 컴포넌트 페이지로 이동한다.
// /portfolio/list를 작성하면 list 페이지로 이동한다.

// 여러 종류의 데이터를 불러와야 하는 페이지를 생성할 때 동적 라우팅을 주로 사용한다.
// 온라이 스토어 상품, 블로그 게시글, 포트폴리오 페이지 등
const PortfolioProjectPage = () => {
  const router = useRouter();

  console.log(router.pathname);
  // 동적 경로에 대한 구체적인 URL 값을 찾을 수 있다.
  console.log(router.query);

  // router.query.projectid를 통해 백엔드 서버에 데이터 패칭 요청을 보낼 수있다.

  return (
    <div>
      <h1>PortfolioProjectPage</h1>
    </div>
  );
};

export default PortfolioProjectPage;
