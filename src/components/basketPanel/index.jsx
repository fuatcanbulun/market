import React from 'react';
import './style.css';

function BasketPanel({data}) {
  return (
    <div className="market-basket-panel">  
      <div className="market-basket-panel-body">  
        {data.map(item=>(
          <div className="market-basket-panel-body-item">
            <div className="market-basket-panel-body-item-label">{item.label}</div>
            <div className="market-basket-panel-body-item-price">{item.price}</div>
            <div className="market-basket-panel-body-item-minus"></div>
            <div className="market-basket-panel-body-item-amount"></div>
            <div className="market-basket-panel-body-item-plus"></div>
          </div>
        ))}    
        <div className="market-basket-panel-body-total">
          <div className="market-basket-panel-body-total-box">₺39,97</div>
        </div>
      </div>
    </div>
  );
}

export default BasketPanel;
