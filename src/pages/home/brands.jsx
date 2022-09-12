import React from "react";

// Components
import Box from "../../components/box";
import Title from "../../components/title";
import CheckboxGroup from "../../components/checkboxGroup";

function Brands({ title, data, value, onChange }) {
  const mappedData = data.map(function (obj) {
    return {
      id: obj.slug,
      label: obj.name,
    };
  });

  return (
    <>
      <Title size="sm" title={title} />
      <Box>
        <CheckboxGroup
          data={mappedData}
          onChange={onChange}
          value={value}
          placeholder="Search brand"
        />
      </Box>
    </>
  );
}

export default Brands;
