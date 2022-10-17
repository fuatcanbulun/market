import React from "react";
import { PageBodyContainer, PageBodyGrid } from "./style";

function PageBody({ children }) {
  return (
    <PageBodyContainer>
      <PageBodyGrid>{children}</PageBodyGrid>
    </PageBodyContainer>
  );
}

export default PageBody;
