import React from "react";
import {
  PageHeaderContainer,
  PageHeaderLayout,
  PageHeaderLayoutItem,
} from "./style";

function PageHeader({ left, center, right }) {
  return (
    <PageHeaderContainer>
      <PageHeaderLayout>
        <PageHeaderLayoutItem>{left}</PageHeaderLayoutItem>
        <PageHeaderLayoutItem>{center}</PageHeaderLayoutItem>
        <PageHeaderLayoutItem>{right}</PageHeaderLayoutItem>
      </PageHeaderLayout>
    </PageHeaderContainer>
  );
}

export default PageHeader;
