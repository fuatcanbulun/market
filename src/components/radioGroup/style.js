import styled from "styled-components";

const RadioGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const RadioGroupItem = styled.div`
  height: 22px;
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;

const RadioGroupItemIcon = styled.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 18px;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
    props.status === "active" ? "var(--themeColor)" : "var(--areaColor3)"};
  &:before {
    content: "";
    position: absolute;
    left: 2px;
    top: 2px;
    border-radius: 7px;
    width: 14px;
    height: 14px;
    background-color: ${(props) =>
      props.status === "active" ? "var(--themeColor)" : "var(--areaColor3)"};
  }
`;

const RadioGroupItemLabel = styled.div`
  height: 22px;
  line-height: 22px;
  font-size: 14px;
  font-family: marketFont400;
  padding-left: 12px;
`;

export {
  RadioGroupContainer,
  RadioGroupItem,
  RadioGroupItemIcon,
  RadioGroupItemLabel,
};
