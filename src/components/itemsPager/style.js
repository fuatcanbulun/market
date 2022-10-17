import styled from "styled-components";
import iconLeft from "../../assets/icons/icon-left.svg";
import iconRight from "../../assets/icons/icon-right.svg";

const ItemsPagerContainer = styled.div`
  width: inherit;
  height: 100px;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemsPagerBox = styled.div`
  position: relative;
  width: 280px;
  height: 40px;
  border-radius: 2px;
  margin-left: 50px;
  margin-right: 50px;
  overflow: hidden;
`;

const ItemsPagerBoxPages = styled.div`
  top: 0;
  position: absolute;
  height: 40px;
  display: flex;
  left: ${(props) => props.leftPos};
`;

const ItemsPagerBoxPage = styled.div`
  min-width: 40px;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
  font-family: marketFont600;
  border-radius: 20px;
  text-align: center;
  cursor: pointer;
  background: ${(props) =>
    props.status === "active" ? "var(--themeColor)" : "transparent"};
  color: ${(props) =>
    props.status === "active" ? "var(--whiteText)" : "var(--secondaryText)"};
`;

const ItemsPagerButton = styled.div`
  width: 62px;
  height: 24px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const ItemsPagerButtonIcon = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${(props) => (props.left ? iconLeft : iconRight)});
  background-size: cover;
`;

const ItemsPagerButtonLabel = styled.div`
  width: 31px;
  height: 24px;
  line-height: 24px;
  font-size: 14px;
  font-family: marketFont600;
  text-align: center;
`;

export {
  ItemsPagerContainer,
  ItemsPagerBox,
  ItemsPagerBoxPages,
  ItemsPagerBoxPage,
  ItemsPagerButton,
  ItemsPagerButtonIcon,
  ItemsPagerButtonLabel,
};
