import React from "react";
import { TitleContainer } from "./style";

function Title({ title, size }) {
  return <TitleContainer size={size}>{title}</TitleContainer>;
}

export default Title;
