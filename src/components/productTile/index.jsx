import React from "react";
import {
  ProductTileContainer,
  ProductTileImageBox,
  ProductTileBrand,
  ProductTilePrice,
  ProductTileLabel,
  ProductTileButton,
} from "./style";

function ProductTile({ label, price, image, manufacturer, onClick }) {
  return (
    <ProductTileContainer>
      <ProductTileImageBox image={image} />
      <ProductTileBrand>{manufacturer}</ProductTileBrand>
      <ProductTilePrice>${price}</ProductTilePrice>
      <ProductTileLabel>{label}</ProductTileLabel>
      <ProductTileButton onClick={() => onClick()}>Add</ProductTileButton>
    </ProductTileContainer>
  );
}

export default ProductTile;
