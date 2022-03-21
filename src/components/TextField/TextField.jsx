import React from "react";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

import Input from "../Input/Input";

const TextField = ({
  id,
  size = "small",
  label,
  onChange,
  InputLabelProps,
  InputProps,
  inputProps,
  disabled,
  fullWidth,
  ...rest
}) => {
  return (
    <FormControl variant="standard" size={size} fullWidth={fullWidth}>
      {label && (
        <InputLabel shrink htmlFor={id} {...InputLabelProps}>
          {label}
        </InputLabel>
      )}
      <Input
        onChange={onChange}
        disabled={disabled}
        inputProps={inputProps}
        {...InputProps}
        {...rest}
      />
    </FormControl>
  );
};

export default TextField;
