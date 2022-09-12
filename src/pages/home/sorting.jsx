import React from "react";

// Components
import Box from "../../components/box";
import Title from "../../components/title";
import RadioGroup from "../../components/radioGroup";

function Sorting({ title, data, value, onChange }) {
  return (
    <>
      <Title size="sm" title={title} />
      <Box>
        <RadioGroup data={data} value={value} onChange={onChange} />
      </Box>
    </>
  );
}

export default Sorting;
