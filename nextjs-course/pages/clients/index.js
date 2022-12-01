import React from "react";
import Link from "next/link";

// 중첩 동적 라우트 경로: /clients
const ClientPage = () => {
  // 동적 경로이동 활용 클라이언트에 대한 정보를 나열할때 (마이페이지?)
  const clients = [
    { id: "max", name: "Maximilian" },
    { id: "menu", name: "Manuel" },
  ];

  return (
    <div>
      <h1>The Client Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* 일반 적인 경로 설정 */}
            {/* <Link href={`/clients/${client.id}`}>{client.name}</Link> */}

            {/* pathname과 query를 활용한 경로 설정 */}
            <Link
              href={{ pathname: "/clients/[id]", query: { id: client.id } }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientPage;
