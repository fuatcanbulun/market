import React from 'react';
import './style.css';

function ItemsFilter({relatedTypes,selectedTypes,selectType}) {


  return (
    <div className="market-items-filter">  
      {relatedTypes?.map(item=>(
        <div className="market-items-filter-button" status={selectedTypes.includes(item)?'active':'passive'} onClick={()=>selectType(item)}>{item}</div>  
      ))}       
    </div>
  );
}

export default ItemsFilter;
