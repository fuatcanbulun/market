import styled from "styled-components";
import iconCheck from "../../assets/icons/icon-check.svg";

const CheckboxGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;

const CheckboxGroupSearch = styled.input`
  height: 44px;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
  font-size: 14px;
  font-family: marketFont400;
  line-height: 44px;
  padding-left: 16px;
  color: var(--tertiaryText);
`;

const CheckboxGroupBody = styled.div`
  display: flex;
  flex-direction: column;
  height: 124px;
  overflow-y: scroll;
  margin-top: 16px;
  padding: 3px;

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

const CheckboxGroupItem = styled.div`
  height: 22px;
  display: flex;
  margin-bottom: 16px;
  cursor: pointer;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CheckboxGroupItemIcon = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 2px;
  background: ${(props) =>
    props.status === "active" ? "var(--themeColor)" : "var(--areaColor2)"};
  background-image: url(${(props) =>
    props.status === "active" ? iconCheck : null});
  background-size: cover;
  border-width: 2px;
  border-style: solid;
  border-color: ${(props) =>
    props.status === "active" ? "var(--themeColor)" : "var(--areaColor3)"};
`;

const CheckboxGroupItemLabel = styled.div`
  &:last-child {
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    font-family: marketFont400;
    padding-left: 12px;
    width: 200px;
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

export {
  CheckboxGroupContainer,
  CheckboxGroupSearch,
  CheckboxGroupBody,
  CheckboxGroupItem,
  CheckboxGroupItemIcon,
  CheckboxGroupItemLabel,
};
