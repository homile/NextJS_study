import React from "react";
import { useRouter } from "next/router";

// Catch All router: 항상 동일한 컴포넌트를 불러오는 방식
// 파일 이름으로 중괄호와 식별자만 작성하지 않고
// 구문이나 특수한 표기법을 추가할 수 있다. ex) [...slug] 슬러그방식

// 경로: /blog/2020/12
const BlogPostsPage = () => {
  const router = useRouter();
  // 단일 문자열이 아닌 배열 형식으로 값이 들어가 있다.
  // 배열 형식의 값은 데이터베이스에 요청을 보낼 때 사용하거나 필터링할 떄 사용할 수 있다.
  console.log(router.query);

  return (
    <div>
      <h1>The Blog Posts</h1>
    </div>
  );
};

export default BlogPostsPage;
