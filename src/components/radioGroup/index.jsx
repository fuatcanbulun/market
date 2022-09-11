import React from 'react';
import './style.css';

function RadioGroup({data,value,onChange}) {
  return (
    <div className="market-radio-group">  
      {data.map(item=>(
        <div className="market-radio-group-item" status={value&&value === item.id&&'active'} onClick={()=>onChange(item.id)}>
          <div className="market-radio-group-item-icon"/>  
          <div className="market-radio-group-item-label">{item.label}</div>    
        </div>   
      ))}         
    </div>
  );
}

export default RadioGroup;
