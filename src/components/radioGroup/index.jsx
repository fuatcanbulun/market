import React from "react";
import {
  RadioGroupContainer,
  RadioGroupItem,
  RadioGroupItemIcon,
  RadioGroupItemLabel,
} from "./style";

function RadioGroup({ data, value, onChange }) {
  return (
    <RadioGroupContainer>
      {data.map((item, index) => (
        <React.Fragment key={index}>
          <RadioGroupItem>
            <RadioGroupItemIcon
              status={value && value === item.id ? "active" : "passive"}
              onClick={() => onChange(item.id)}
            />
            <RadioGroupItemLabel>{item.label}</RadioGroupItemLabel>
          </RadioGroupItem>
        </React.Fragment>
      ))}
    </RadioGroupContainer>
  );
}

export default RadioGroup;
