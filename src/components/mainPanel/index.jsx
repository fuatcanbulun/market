import React from 'react';
import './style.css';

function MainPanel({children}) {
  return (
    <div className="market-main-panel">        
      {children}        
    </div>
  );
}

export default MainPanel;
