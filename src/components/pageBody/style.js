import styled from "styled-components";

const PageBodyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    border-radius: 2px;
  }
  &::-webkit-scrollbar {
    width: 4px;
    background-color: var(--areaColor3);
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    width: 4px;
    background-color: var(--themeColor);
  }
`;

const PageBodyGrid = styled.div`
  margin-top: 100px;
  width: 800px;
  display: flex;
  @media screen and (min-width: 960px) {
    width: 800px;
  }
  @media screen and (min-width: 1200px) {
    width: 1232px;
  }
`;

export { PageBodyContainer, PageBodyGrid };
