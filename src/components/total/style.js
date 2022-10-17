import styled from "styled-components";
import iconCart from "../../assets/icons/icon-cart.svg";

const MarketTotalContainer = styled.div`
  height: 50px;
  width: 123px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--themeColor);
  border-radius: 25px;
`;

const MarketTotalIcon = styled.div`
  height: 24px;
  width: 24px;
  display: inline-block;
  background-image: url(${iconCart});
  background-size: cover;
  margin-right: 8px;
`;

const MarketTotalValue = styled.div`
  height: 24px;
  width: auto;
  line-height: 24px;
  font-size: 14px;
  font-family: marketFont600;
  white-space: nowrap;
  color: var(--whiteText);
`;

export { MarketTotalContainer, MarketTotalIcon, MarketTotalValue };
