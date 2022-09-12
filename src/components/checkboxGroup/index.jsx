import React, { useEffect, useRef, useState } from "react";
import "./style.css";

function CheckboxGroup({ data, value, onChange, placeholder }) {
  const [searchParameter, setSearchParameter] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const searchInput = useRef();

  useEffect(() => {
    const filteredDataArray = [];
    if (searchParameter) {
      data.forEach((item) => {
        let searchItemUpper = item.label.toUpperCase();
        searchItemUpper = searchItemUpper.replace("İ", "I");
        searchItemUpper = searchItemUpper.replace("Ü", "U");
        searchItemUpper = searchItemUpper.replace("Ö", "O");
        searchItemUpper = searchItemUpper.replace("Ç", "C");
        searchItemUpper = searchItemUpper.replace("Ş", "S");
        const searchedContains = searchItemUpper.includes(searchParameter);
        if (searchedContains) {
          filteredDataArray.push(item);
        }
      });
      setFilteredData(filteredDataArray);
    } else {
      setFilteredData(data);
    }
  }, [data, searchParameter]);

  let timeoutId = 0;
  function onSearch() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      let searchValUpper = searchInput.current.value.toUpperCase();
      searchValUpper = searchValUpper.replace("İ", "I");
      searchValUpper = searchValUpper.replace("Ü", "U");
      searchValUpper = searchValUpper.replace("Ö", "O");
      searchValUpper = searchValUpper.replace("Ç", "C");
      searchValUpper = searchValUpper.replace("Ş", "S");
      setSearchParameter(searchValUpper);
    }, 1000);
  }

  return (
    <div className="market-checkbox-group">
      <input
        ref={searchInput}
        className="market-checkbox-group-search"
        placeholder={placeholder}
        onChange={() => onSearch()}
      />
      <div className="market-checkbox-group-body">
        {filteredData.map((item, index) => (
          <React.Fragment key={index}>
            <div
              className="market-checkbox-group-item"
              status={value?.includes(item.id) ? "active" : "passive"}
              onClick={() => onChange(item.id)}
            >
              <div className="market-checkbox-group-item-icon" />
              <div className="market-checkbox-group-item-label">
                {item.label}
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default CheckboxGroup;
