import React from "react";

const UserProfilePage = (props) => {
  return <h1>{props.username}</h1>;
};

export default UserProfilePage;

// 요청이 들어올 때마다 호출
export const getServerSideProps = async (context) => {
  const { params, req, res } = context;

  return {
    props: {
      username: "Max",
    },
  };
};
