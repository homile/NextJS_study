import React from "react";
// reate link랑 같음
import Link from "next/link";

// root 파일
const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ul>
        <li>
          {/* a태그를 이용할때 새 HTTP 요청으로 인해 상태가 변경될 수 있다. */}
          {/* replace 새로운 페이지를 띄우지 않고 현재 페이지를 새로운 페이지로 교체하면서 뒤로가기 기능은 사라진다. */}
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
