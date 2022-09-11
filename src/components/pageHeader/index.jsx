import React from 'react';
import './style.css';

function PageHeader({left,center,right}) {
  return (
    <div className="market-page-header">
      <div className="market-page-header-layout">
        <div className="market-page-header-layout-item">{left}</div>
        <div className="market-page-header-layout-item">{center}</div>
        <div className="market-page-header-layout-item">{right}</div>
      </div>     
    </div>
  );
}

export default PageHeader;
