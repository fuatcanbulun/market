import React from "react";
import "./style.css";
import { useSelector } from "react-redux";

function Total() {
  const { basket } = useSelector((state) => state);
  return (
    <div className="market-total">
      <div className="market-total-icon"></div>
      <div className="market-total-value">
        <span>₺ </span>
        {basket.total > 0 ? basket.total.toFixed(2) : 0}
      </div>
    </div>
  );
}

export default Total;
