import React from "react";
import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
  // props중 link가 있을 경우 화면 이동 기능
  if (props.link) {
    return (
      <Link href={props.link}>
        {/* Link 태그안에 a 태그를 추가하는 이유를 알아보시요. */}
        <a className={classes.btn}>{props.children}</a>
      </Link>
    );
  }

  // porps에 link가 없을 경우 form 전송 기능
  return (
    <button className={classes.btn} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
