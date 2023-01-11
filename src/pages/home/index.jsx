import React, { useEffect, useState } from "react";

// Components
import Page from "../../components/page";
import PageHeader from "../../components/pageHeader";
import PageBody from "../../components/pageBody";
import SidePanel from "../../components/sidePanel";
import MainPanel from "../../components/mainPanel";
import Logo from "../../components/logo";
import Total from "../../components/total";

// Tools
import Sorting from "./sorting";
import Brands from "./brands";
import Tags from "./tags";
import Basket from "./basket";
import Products from "./products";

const sortingOptions = [
  {
    id: "lowToHigh",
    label: "Price low to high",
  },
  {
    id: "highToLow",
    label: "Price high to low",
  },
  {
    id: "newToOld",
    label: "New to old",
  },
  {
    id: "oldToNew",
    label: "Old to new",
  },
];

function Home() {
  const [companies, setCompanies] = useState([]);
  const [items, setItems] = useState([]);
  const [tags, setTags] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedSorting, setSelectedSorting] = useState(null);
  const [filteredData, setFilteredData] = useState([]);
  const [relatedTypes, setRelatedTypes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);

  useEffect(() => {
    getCompanies();
    getItems();
    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    filteredData.sort(dynamicSort(selectedSorting));
    //eslint-disable-next-line
  }, [selectedSorting]);

  useEffect(() => {
    let brandFilterResult = [];
    let tagFilterResult = [];
    let typeFilterResult = [];

    if (selectedBrands.length > 0) {
      items.forEach((item) => {
        if (selectedBrands.includes(item.manufacturer)) {
          brandFilterResult.push(item);
        }
      });
    } else {
      brandFilterResult = [...items];
    }

    if (selectedTags.length > 0) {
      brandFilterResult.forEach((item) => {
        let tagCheck = false;
        item.tags.forEach((tag) => {
          if (selectedTags.includes(tag.toLowerCase())) {
            tagCheck = true;
          }
        });
        if (tagCheck) {
          tagFilterResult.push(item);
        }
      });
    } else {
      tagFilterResult = brandFilterResult;
    }

    const types = [];
    tagFilterResult.forEach((result) => {
      const found = types.find((item) => item === result.itemType);
      if (!found) {
        types.push(result.itemType);
      }
    });
    setRelatedTypes(types);

    if (selectedTypes.length > 0) {
      tagFilterResult.forEach((item) => {
        if (selectedTypes.includes(item.itemType)) {
          typeFilterResult.push(item);
        }
      });
    }
    setFilteredData(typeFilterResult);

    //eslint-disable-next-line
  }, [selectedBrands, selectedTags, selectedTypes, items]);

  function getCompanies() {
    fetch(`../../mockData/companies.json`)
      .then((response) => response.json())
      .then((data) => {
        setCompanies(data);
      });
  }

  function getItems() {
    fetch(`../../mockData/items.json`)
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.map((item, index) => {
          item.iconId = index;
          return item;
        });

        setItems(mappedData);
        getTags(mappedData);
      });
  }

  function getTags(data) {
    const tagsData = [];
    data.forEach((item) => {
      item.tags.forEach((tag) => {
        if (!tagsData.includes(tag)) {
          tagsData.push(tag);
        }
      });
    });
    setTags(tagsData.sort());
  }

  function handleSelectBrand(val) {
    let newSelectedBrands = [...selectedBrands];
    const found = newSelectedBrands.find((item) => item === val);
    if (found) {
      newSelectedBrands = newSelectedBrands.filter((item) => item !== val);
    } else {
      newSelectedBrands.push(val);
    }
    setSelectedBrands(newSelectedBrands);
  }

  function handleSelectTag(val) {
    let newSelectedTags = [...selectedTags];
    const found = newSelectedTags.find((item) => item === val);
    if (found) {
      newSelectedTags = newSelectedTags.filter((item) => item !== val);
    } else {
      newSelectedTags.push(val);
    }
    setSelectedTags(newSelectedTags);
  }

  function dynamicSort(property) {
    let newFilteredData = [...filteredData];
    if (property === "lowToHigh") {
      newFilteredData = newFilteredData.sort((a, b) => a.price - b.price);
    } else if (property === "highToLow") {
      newFilteredData = newFilteredData.sort((a, b) => b.price - a.price);
    } else if (property === "newToOld") {
      newFilteredData = newFilteredData.sort((a, b) => b.added - a.added);
    } else if (property === "oldToNew") {
      newFilteredData = newFilteredData.sort((a, b) => a.added - b.added);
    }
    setFilteredData(newFilteredData);
  }

  function onSelectType(val) {
    let newSelectedTypes = [...selectedTypes];
    const found = newSelectedTypes.find((item) => item === val);
    if (found) {
      newSelectedTypes = newSelectedTypes.filter((item) => item !== val);
    } else {
      newSelectedTypes.push(val);
    }
    setSelectedTypes(newSelectedTypes);
  }

  return (
    <Page>
      <PageHeader center={<Logo />} right={<Total />} />
      <PageBody>
        <SidePanel>
          <Sorting
            title="Sorting"
            data={sortingOptions}
            value={selectedSorting}
            onChange={(val) => setSelectedSorting(val)}
          />
          <Brands
            title="Brands"
            data={companies}
            value={selectedBrands}
            onChange={(val) => handleSelectBrand(val)}
          />
          <Tags
            title="Tags"
            data={tags}
            value={selectedTags}
            onChange={(val) => handleSelectTag(val)}
          />
        </SidePanel>
        <MainPanel>
          <Products
            data={filteredData}
            itemCount={15}
            relatedTypes={relatedTypes}
            selectedTypes={selectedTypes}
            selectType={(val) => onSelectType(val)}
          />
        </MainPanel>
        <SidePanel>
          <Basket />
        </SidePanel>
      </PageBody>
    </Page>
  );
}

export default Home;
