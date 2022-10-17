import React from "react";
import {
  MarketTotalContainer,
  MarketTotalIcon,
  MarketTotalValue,
} from "./style";
import { useSelector } from "react-redux";

function Total() {
  const { basket } = useSelector((state) => state);
  return (
    <MarketTotalContainer>
      <MarketTotalIcon />
      <MarketTotalValue>
        ${basket.total > 0 ? basket.total.toFixed(2) : 0}
      </MarketTotalValue>
    </MarketTotalContainer>
  );
}

export default Total;
