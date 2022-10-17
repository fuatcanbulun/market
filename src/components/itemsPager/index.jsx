import React from "react";
import {
  ItemsPagerContainer,
  ItemsPagerBox,
  ItemsPagerBoxPages,
  ItemsPagerBoxPage,
  ItemsPagerButton,
  ItemsPagerButtonIcon,
  ItemsPagerButtonLabel,
} from "./style";

function ItemsPager({ activePage, onChange, dataCount, itemCount }) {
  const pageCount = parseInt(dataCount / itemCount) + 1;

  return (
    <ItemsPagerContainer>
      <ItemsPagerButton
        onClick={() => onChange(activePage === 1 ? 1 : activePage - 1)}
      >
        <ItemsPagerButtonIcon left />
        <ItemsPagerButtonLabel>Prev</ItemsPagerButtonLabel>
      </ItemsPagerButton>

      <ItemsPagerBox>
        <ItemsPagerBoxPages
          leftPos={`-${activePage > 7 ? (activePage - 7) * 40 : 0}px`}
        >
          {[...Array(pageCount)].map((x, i) => (
            <React.Fragment key={i}>
              <ItemsPagerBoxPage
                onClick={() => onChange(i + 1)}
                status={i + 1 === activePage ? "active" : "passive"}
              >
                {i + 1}
              </ItemsPagerBoxPage>
            </React.Fragment>
          ))}
        </ItemsPagerBoxPages>
      </ItemsPagerBox>
      <ItemsPagerButton
        onClick={() =>
          onChange(activePage === pageCount ? pageCount : activePage + 1)
        }
      >
        <ItemsPagerButtonLabel>Next</ItemsPagerButtonLabel>
        <ItemsPagerButtonIcon right />
      </ItemsPagerButton>
    </ItemsPagerContainer>
  );
}

export default ItemsPager;
