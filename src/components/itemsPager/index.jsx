import React from 'react';
import './style.css';

function ItemsPager({activePage,onChange,dataCount,itemCount}) {

  const pageCount = parseInt(dataCount/itemCount)+1

  return (
    <div className="market-items-pager"> 
        <div className="market-items-pager-container-button left" onClick={()=>onChange(activePage===1?1:activePage-1)}>
          <div className="market-items-pager-container-button-icon"></div>
          <div className="market-items-pager-container-button-label">Prev</div>     
        </div>

        <div className="market-items-pager-container">
        {pageCount<=9 &&
          <>
          {[...Array(pageCount)].map((x, i) =>
            <div className="market-items-pager-container-page" onClick={()=>onChange(i+1)} status={i+1 === activePage && 'active'} >{i+1}</div> 
          )}
          </>
        }
        {pageCount>9 &&
          <>
          {[...Array(pageCount)].map((x, i) =>
            <>
            {(i+1)<=4 &&
              <div className="market-items-pager-container-page" onClick={()=>onChange(i+1)} status={i+1 === activePage && 'active'}>{i+1}</div> 
            }
            </>
          )}
          <div className="market-items-pager-container-page">...</div> 
          {[...Array(pageCount)].map((x, i) =>
            <>
            {(pageCount-4)<(i+1) &&
              <div className="market-items-pager-container-page" onClick={()=>onChange(i+1)} status={i+1 === activePage && 'active'}>{i+1}</div> 
            }
            </>
          )}
          </>
        }
        
        </div>
        <div className="market-items-pager-container-button right" onClick={()=>onChange(activePage===pageCount?pageCount:activePage+1)}>
          <div className="market-items-pager-container-button-label">Next</div>  
          <div className="market-items-pager-container-button-icon"></div>   
        </div>  
    </div>
  );
}

export default ItemsPager;
