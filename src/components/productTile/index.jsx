import React from 'react';
import './style.css';

function ProductTile({label,price,onClick}) {
  return (
    <div className="market-product-tile"> 
      <div className="market-product-tile-image-box">
        <div className="market-product-tile-image"></div>
      </div>  
      <div className="market-product-tile-price">₺ {price}</div>  
      <div className="market-product-tile-label">{label}</div> 
      <div className="market-product-tile-button" onClick={()=>onClick()}>Add</div> 
    </div>
  );
}

export default ProductTile;
