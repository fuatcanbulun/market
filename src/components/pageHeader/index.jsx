import React from 'react';
import './style.css';

function PageHeader({title,basket}) {
  return (
    <div className="market-page-header">
      {title}
    </div>
  );
}

export default PageHeader;
