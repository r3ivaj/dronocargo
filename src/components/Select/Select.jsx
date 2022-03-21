import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MuiSelect from "@mui/material/Select";
import { styled } from "@mui/material/styles";
import Input from "../Input/Input";
import { grey } from "../../theme/colors";

const StyledInput = styled(Input)(({ theme }) => ({
  "& > svg": {
    color: `${grey[100]}`,
    marginRight: "10px",
  },
}));

const Select = ({ value, label, onChange, id, options = [] }) => {
  return (
    <FormControl fullWidth size="small" variant="standard">
      {label && (
        <InputLabel shrink htmlFor={id}>
          {label}
        </InputLabel>
      )}
      <MuiSelect
        labelId={id}
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        input={<StyledInput />}
      >
        {options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
    </FormControl>
  );
};

export default Select;
