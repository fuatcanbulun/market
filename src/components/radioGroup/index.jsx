import React from 'react';
import './style.css';

function RadioGroup({data,value}) {
  return (
    <div className="market-radio-group">  
      {data.map(item=>(
        <div className="market-radio-group-item">
          <div className="market-radio-group-item-icon"/>  
          <div className="market-radio-group-item-label">{item.label}</div>    
        </div>   
      ))}         
    </div>
  );
}

export default RadioGroup;
