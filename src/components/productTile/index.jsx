import React, { useEffect, useState } from "react";
import {
  ProductTileContainer,
  ProductTileImageBox,
  ProductTileImage,
  ProductTilePrice,
  ProductTileLabel,
  ProductTileButton,
} from "./style";

function ProductTile({ label, price, icon, onClick }) {
  return (
    <ProductTileContainer>
      <ProductTileImageBox>
        <ProductTileImage src={`http://picsum.photos/id/${icon}/500/500`} />
      </ProductTileImageBox>
      <ProductTilePrice>${price}</ProductTilePrice>
      <ProductTileLabel>{label}</ProductTileLabel>
      <ProductTileButton onClick={() => onClick()}>Add</ProductTileButton>
    </ProductTileContainer>
  );
}

export default ProductTile;
