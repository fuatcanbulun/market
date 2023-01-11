import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseAmount, decreaseAmount } from "../../store/actions/basket";
import Title from "../title";
import {
  BasketPanelContainer,
  BasketPanelBodyItem,
  BasketPanelBodyItemAmount,
  BasketPanelBodyItemLabel,
  BasketPanelBodyItemMinus,
  BasketPanelBodyItemPlus,
  BasketPanelBodyItemPrice,
  BasketPanelBodyTotal,
  BasketPanelBodyTotalBox,
} from "./style";

function BasketPanel() {
  const dispatch = useDispatch();
  const { basket } = useSelector((state) => state);

  return (
    <BasketPanelContainer>
      {basket.list.length === 0 ? (
        <Title size="sm" title="Empty Basket" centered />
      ) : (
        <>
          {basket.list.map((item, index) => (
            <React.Fragment key={index}>
              <BasketPanelBodyItem>
                <BasketPanelBodyItemLabel>
                  {item.label}
                </BasketPanelBodyItemLabel>
                <BasketPanelBodyItemPrice>
                  ${item.price}
                </BasketPanelBodyItemPrice>
                <BasketPanelBodyItemMinus
                  onClick={() => dispatch(decreaseAmount(item.id))}
                ></BasketPanelBodyItemMinus>
                <BasketPanelBodyItemAmount>
                  {item.amount}
                </BasketPanelBodyItemAmount>
                <BasketPanelBodyItemPlus
                  onClick={() => dispatch(increaseAmount(item.id))}
                ></BasketPanelBodyItemPlus>
              </BasketPanelBodyItem>
            </React.Fragment>
          ))}
          <BasketPanelBodyTotal>
            <BasketPanelBodyTotalBox>
              ${basket.total > 0 ? basket.total.toFixed(2) : 0}
            </BasketPanelBodyTotalBox>
          </BasketPanelBodyTotal>
        </>
      )}
    </BasketPanelContainer>
  );
}

export default BasketPanel;
