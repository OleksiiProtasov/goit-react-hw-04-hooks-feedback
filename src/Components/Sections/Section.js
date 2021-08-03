import React from "react";
import style from "./style.module.css";

const Section = ({ children }) => {
  return <div className={style.Container}>{children}</div>;
};
export default Section;
