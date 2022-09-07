import React from 'react';
import './style.css';

function CheckboxGroup({data,value,placeholder}) {
  return (
    <div className="market-checkbox-group">  
      <input className="market-checkbox-group-search" placeholder={placeholder}/>   
      <div className="market-checkbox-group-body">
        {data.map(item=>(
          <div className="market-checkbox-group-item">
            <div className="market-checkbox-group-item-icon"/>  
            <div className="market-checkbox-group-item-label">{item.label}</div>    
          </div>   
        ))} 
      </div>
    </div>
  );
}

export default CheckboxGroup;
