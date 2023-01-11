import React from "react";
import { TitleContainer } from "./style";

function Title({ title, size, margin, centered }) {
  return (
    <TitleContainer size={size} margin={margin} centered={centered}>
      {title}
    </TitleContainer>
  );
}

export default Title;
