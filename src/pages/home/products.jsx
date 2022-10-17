import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/basket";

// Components
import Title from "../../components/title";
import ItemsGrid from "../../components/itemsGrid";
import ItemsHeader from "../../components/itemsHeader";
import ItemsPager from "../../components/itemsPager";
import ProductTile from "../../components/productTile";
import NoResultBanner from "../../components/noResultBanner";

function Products({
  data,
  relatedTypes,
  selectedTypes,
  selectType,
  itemCount,
}) {
  const dispatch = useDispatch();
  const [rangeStart, setRangeStart] = useState(null);
  const [rangeEnd, setRangeEnd] = useState(null);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    if (activePage && itemCount) {
      setRangeStart(activePage * itemCount - itemCount);
      setRangeEnd(activePage * itemCount);
    }
  }, [activePage, itemCount]);

  useEffect(() => {
    setActivePage(1);
  }, [data]);

  return (
    <>
      <Title size="md" title="Products" />
      {data.length > 0 ? (
        <>
          <ItemsHeader
            result={data.length}
            relatedTypes={relatedTypes}
            selectedTypes={selectedTypes}
            selectType={selectType}
          />
          <ItemsGrid>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                {index >= rangeStart && index + 1 <= rangeEnd && (
                  <ProductTile
                    icon={item.iconId}
                    label={item.name}
                    price={item.price}
                    onClick={() => dispatch(addItem(item))}
                  />
                )}
              </React.Fragment>
            ))}
          </ItemsGrid>
          <ItemsPager
            dataCount={data.length}
            itemCount={16}
            activePage={activePage}
            onChange={(val) => setActivePage(val)}
          />
        </>
      ) : (
        <NoResultBanner label="No results found" />
      )}
    </>
  );
}

export default Products;
