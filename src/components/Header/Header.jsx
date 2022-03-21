import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import User from "../User/User";
import { headerStyle } from "./Header.styles";

const Header = () => {
  return (
    <Box component="header" sx={headerStyle}>
      <Typography fontWeight={600}>Dronocargo</Typography>
      <Box mr="auto" />
      <Box>
        <User name="Regina Zepeda" />
      </Box>
    </Box>
  );
};

export default Header;
