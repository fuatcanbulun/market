import React from "react";

// Components
import Box from "../../components/box";
import Title from "../../components/title";
import CheckboxGroup from "../../components/checkboxGroup";

function Tags({ title, data, value, onChange }) {
  const mappedData = data.map(function (obj) {
    return {
      id: obj.toLowerCase(),
      label: obj,
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
          placeholder="Search tag"
        />
      </Box>
    </>
  );
}

export default Tags;
