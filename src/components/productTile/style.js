import styled from "styled-components";

const ProductTileContainer = styled.div`
  width: 180px;
  height: 300px;
  margin: 10px;
  position: relative;
  border: 1px solid var(--areaColor5);
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
`;

const ProductTileImageBox = styled.div`
  width: 160px;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--areaColor2);
  overflow: hidden;
  border-radius: 12px;
  background-image: url(${(props) => props.image});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ProductTileBrand = styled.div`
  margin-top: 8px;
  width: calc(100% - 20px);
  height: 23px;
  font-style: normal;
  font-size: 16px;
  font-family: marketFont700;
  line-height: 20px;
  text-align: left;
`;

const ProductTilePrice = styled.div`
  margin-top: 4px;
  width: calc(100% - 20px);
  height: 23px;
  font-style: normal;
  font-size: 14px;
  font-family: marketFont700;
  line-height: 20px;
  color: var(--themeColor);
  text-align: left;
`;

const ProductTileLabel = styled.div`
  width: calc(100% - 20px);
  height: 40px;
  font-weight: 600;
  font-size: 14px;
  font-family: marketFont600;
  line-height: 20px;
  text-align: left;
`;

const ProductTileButton = styled.div`
  position: absolute;
  width: calc(100% - 20px);
  height: 22px;
  bottom: 10px;
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
  ProductTileBrand,
  ProductTilePrice,
  ProductTileLabel,
  ProductTileButton,
};
