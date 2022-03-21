import MuiAutocomplete from "@mui/material/Autocomplete";
import TextField from "../TextField/TextField";
import { styled } from "@mui/material/styles";
import { grey } from "../../theme/colors";

const StyledAutocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  "& .MuiInputAdornment-positionStart": {
    marginLeft: "12px",
    marginRight: "5px",
  },
  "& .MuiSvgIcon-root": {
    color: grey[100],
  },
}));

const Autocomplete = ({ options, label, startAdornment, value, onChange }) => {
  return (
    <StyledAutocomplete
      disablePortal
      options={options}
      value={value}
      onChange={onChange}
      renderInput={(params) => (
        <TextField {...params} label={label} startAdornment={startAdornment} />
      )}
    />
  );
};

export default Autocomplete;
