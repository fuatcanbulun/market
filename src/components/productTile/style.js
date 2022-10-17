import styled from "styled-components";

const ProductTileContainer = styled.div`
  width: 124px;
  height: 225px;
  margin: 12px;
  position: relative;
`;

const ProductTileImageBox = styled.div`
  width: 124px;
  height: 124px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--areaColor5);
  border-radius: 12px;
`;

const ProductTileImage = styled.img`
  width: 92px;
  height: 92px;
  background-color: var(--areaColor5);
`;

const ProductTilePrice = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 23px;
  font-style: normal;
  font-size: 14px;
  font-family: marketFont700;
  line-height: 20px;
  color: var(--themeColor);
  text-align: left;
`;

const ProductTileLabel = styled.div`
  width: 100%;
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  font-family: marketFont600;
  line-height: 20px;
  text-align: left;
`;

const ProductTileButton = styled.div`
  position: absolute;
  width: 100%;
  height: 22px;
  bottom: 0;
  background-color: var(--areaColor5);
  color: var(--whiteText);
  font-style: normal;
  font-size: 12px;
  font-family: marketFont600;
  line-height: 22px;
  border-radius: 15px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: var(--themeColor);
  }
`;

export {
  ProductTileContainer,
  ProductTileImageBox,
  ProductTileImage,
  ProductTilePrice,
  ProductTileLabel,
  ProductTileButton,
};
