import * as React from "react";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { CaretDown } from "react-bootstrap-icons";

import Button from "../Button/Button";
import Icon from "../Icon/Icon";
import { grey } from "../../theme/colors";

const Menu = ({ items = [], label }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="text"
        onClick={handleClick}
        endIcon={<Icon component={<CaretDown />} color={grey[100]} />}
      >
        {label}
      </Button>
      <MuiMenu anchorEl={anchorEl} open={open} onClose={handleClose}>
        {items.map((item) => (
          <MenuItem onClick={item.onClick} key={item.label}>
            {item.label}
          </MenuItem>
        ))}
      </MuiMenu>
    </div>
  );
};

export default Menu;
