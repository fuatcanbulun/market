import React from "react";
import "./style.css";

function Title({ title, size }) {
  return <div className={"market-title " + size}>{title}</div>;
}

export default Title;
