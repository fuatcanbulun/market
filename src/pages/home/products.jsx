import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/actions/basket";

// Components
import Title from "../../components/title";
import ItemsGrid from "../../components/itemsGrid";
import ItemsFilter from "../../components/itemsFilter";
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
    setRangeStart(activePage * itemCount - itemCount);
    setRangeEnd(activePage * itemCount);
  }, [activePage, itemCount]);

  return (
    <>
      <Title size="md" title="Products" />
      {data.length > 0 ? (
        <>
          <ItemsFilter
            relatedTypes={relatedTypes}
            selectedTypes={selectedTypes}
            selectType={selectType}
          />
          <ItemsGrid>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                {index >= rangeStart && index + 1 <= rangeEnd && (
                  <ProductTile
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
