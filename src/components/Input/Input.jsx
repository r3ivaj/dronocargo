import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";

import { grey } from "../../theme/colors";

const Input = styled(OutlinedInput)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(2),
    fontSize: "0.875rem",
  },
  "& .MuiInputBase-input": {
    padding: "8px 16px",
  },
  "& .MuiInputBase-inputAdornedStart": {
    paddingLeft: 0,
  },
  boxShadow: `0px 1px 4px ${grey[50]}`,
  border: `1px solid ${grey[0]}`,
  borderRadius: "4px",
  height: "40px",
}));

export default Input;
