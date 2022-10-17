import React from "react";
import { ItemsHeaderContainer, ItemsFilterButton, ItemsResult } from "./style";

function ItemsHeader({ result, relatedTypes, selectedTypes, selectType }) {
  return (
    <ItemsHeaderContainer>
      {relatedTypes?.map((item, index) => (
        <React.Fragment key={index}>
          <ItemsFilterButton
            status={selectedTypes.includes(item) ? "active" : "passive"}
            onClick={() => selectType(item)}
          >
            {item}
          </ItemsFilterButton>
        </React.Fragment>
      ))}
      <ItemsResult>
        <span>{result}</span> item{result > 1 ? "s" : ""} found
      </ItemsResult>
    </ItemsHeaderContainer>
  );
}

export default ItemsHeader;
