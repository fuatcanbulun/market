import React from 'react';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { increaseAmount,decreaseAmount } from '../../store/actions/basket';


function BasketPanel() {
  const dispatch = useDispatch();
  const {basket} = useSelector((state)=>state);


  return (
    <div className="market-basket-panel">  
      <div className="market-basket-panel-body">  
        {basket.list.map(item=>(
          <div className="market-basket-panel-body-item">
            <div className="market-basket-panel-body-item-label">{item.label}</div>
            <div className="market-basket-panel-body-item-price">₺ {item.price}</div>
            <div className="market-basket-panel-body-item-minus" onClick={()=>dispatch(decreaseAmount(item.id))} ></div>
            <div className="market-basket-panel-body-item-amount">{item.amount}</div>
            <div className="market-basket-panel-body-item-plus" onClick={()=>dispatch(increaseAmount(item.id))}></div>
          </div>
        ))}    
        <div className="market-basket-panel-body-total">
          <div className="market-basket-panel-body-total-box">₺ {basket.total>0?basket.total.toFixed(2):0}</div>
        </div>
      </div>
    </div>
  );
}

export default BasketPanel;
