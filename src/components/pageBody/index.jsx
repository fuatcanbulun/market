import React from "react";
import "./style.css";

function PageBody({ children }) {
  return (
    <div className="market-page-body">
      <div className="market-page-body-grid">{children}</div>
    </div>
  );
}

export default PageBody;
