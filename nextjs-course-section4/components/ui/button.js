import React from "react";
import Link from "next/link";
import classes from "./button.module.css";

const Button = (props) => {
  return (
    <Link href={props.link}>
      {/* Link 태그안에 a 태그를 추가하는 이유를 알아보시요. */}
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
