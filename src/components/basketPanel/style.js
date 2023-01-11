import styled from "styled-components";
import iconMinus from "../../assets/icons/icon-minus.svg";
import iconPlus from "../../assets/icons/icon-plus.svg";

const BasketPanelContainer = styled.div`
  height: auto;
  padding: 16px;
  border-radius: 15px;
  border: 1px solid var(--areaColor5);
`;

const BasketPanelBodyItem = styled.div`
  height: 72px;
  position: relative;
  border-bottom: 2px solid var(--areaColor4);
`;

const BasketPanelBodyItemLabel = styled.div`
  position: absolute;
  top: 16px;
  left: 6px;
  font-size: 14px;
  width: 150px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-family: marketFont400;
`;

const BasketPanelBodyItemPrice = styled.div`
  position: absolute;
  left: 6px;
  top: 38px;
  font-size: 14px;
  font-family: marketFont600;
  color: var(--themeColor);
`;

const BasketPanelBodyItemMinus = styled.div`
  position: absolute;
  right: 64px;
  top: 20px;
  width: 32px;
  height: 32px;
  background-image: url(${iconMinus});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const BasketPanelBodyItemAmount = styled.div`
  position: absolute;
  right: 32px;
  top: 20px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  background-color: var(--themeColor);
  color: var(--whiteText);
  align-items: center;
  font-weight: 700;
  font-size: 14px;
  font-family: marketFont400;
  text-align: center;
  border-radius: 16px;
`;

const BasketPanelBodyItemPlus = styled.div`
  position: absolute;
  right: 0px;
  top: 20px;
  width: 32px;
  height: 32px;
  background-image: url(${iconPlus});
  background-size: 20px 20px;
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const BasketPanelBodyTotal = styled.div`
  width: 100%;
  height: 51px;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const BasketPanelBodyTotalBox = styled.div`
  width: 92px;
  height: 48px;
  line-height: 48px;
  border: 2px solid var(--themeColor);
  font-size: 14px;
  font-family: marketFont600;
  color: var(--themeColor);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
`;

export {
  BasketPanelContainer,
  BasketPanelBodyItem,
  BasketPanelBodyItemLabel,
  BasketPanelBodyItemPrice,
  BasketPanelBodyItemMinus,
  BasketPanelBodyItemAmount,
  BasketPanelBodyItemPlus,
  BasketPanelBodyTotal,
  BasketPanelBodyTotalBox,
};
