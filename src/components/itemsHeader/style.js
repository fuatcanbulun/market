import styled from "styled-components";

const ItemsHeaderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30px;
  border-radius: 2px;
  display: flex;
  justify-content: flex-start;
  margin: 16px 0;
`;

const ItemsFilterButton = styled.div`
  width: 100px;
  height: 30px;
  line-height: 30px;
  font-size: 13px;
  font-family: marketFont400;
  border-radius: 15px;
  margin-left: 10px;
  background: ${(props) =>
    props.status === "active" ? "var(--themeColor)" : "var(--areaColor5)"};
  color: var(--whiteText);
  text-align: center;
  cursor: pointer;
`;

const ItemsResult = styled.div`
  position: absolute;
  right: 10px;
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
