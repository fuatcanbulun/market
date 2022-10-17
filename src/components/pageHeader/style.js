import styled from "styled-components";

const PageHeaderContainer = styled.div`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 76px;
  background-color: var(--areaColor2);
  display: flex;
  justify-content: center;
`;

const PageHeaderLayout = styled.div`
  height: 76px;
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (min-width: 960px) {
    width: 800px;
  }
  @media screen and (min-width: 1200px) {
    width: 1232px;
  }
`;

const PageHeaderLayoutItem = styled.div`
  min-width: 123px;
`;

export { PageHeaderContainer, PageHeaderLayout, PageHeaderLayoutItem };
