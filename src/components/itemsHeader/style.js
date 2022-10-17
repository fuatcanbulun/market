import styled from "styled-components";

const ItemsHeaderContainer = styled.div`
  position: relative;
  width: auto;
  height: 30px;
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  margin: 16px 0;
`;

const ItemsFilterButton = styled.div`
  width: 60px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  font-family: marketFont400;
  border-radius: 15px;
  margin-right: 8px;
  background: ${(props) =>
    props.status === "active" ? "var(--themeColor)" : "var(--areaColor5)"};
  color: var(--whiteText);
  text-align: center;
  cursor: pointer;
`;

const ItemsResult = styled.div`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 200px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  color: var(--primaryColor);
  text-align: right;

  span {
    font-size: 16px;
    font-weight: bold;
  }
`;

export { ItemsHeaderContainer, ItemsFilterButton, ItemsResult };
