import React from 'react';
import './style.css';

function SidePanel({children}) {
  return (
    <div className="market-side-panel">        
      {children}        
    </div>
  );
}

export default SidePanel;
