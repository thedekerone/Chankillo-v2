import React, { useState } from "react";
import { Label, In, Wrap } from "./styles";

export const Input = ({ type, name, placeholder, handlechange }) => {
  const [trigger, setTrigger] = useState(false);
  return (
    <Label>
      <p>{name}</p>
      <Wrap
        trigger={trigger}
        position="absolute"
        width="100%"
        height="2px"
      ></Wrap>
      <In
        onChange={handlechange}
        type={type}
        onFocus={() => setTrigger(true)}
        onBlur={() => setTrigger(false)}
        name={name}
        id={name}
        placeholder={placeholder}
        required
      />
    </Label>
  );
};
