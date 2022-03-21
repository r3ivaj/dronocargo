import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { pxToRem } from "../../utils/styles";

const Footer = () => {
  return (
    <Stack
      direction="row"
      sx={{ paddingBottom: pxToRem(32), paddingTop: pxToRem(48) }}
    >
      <Typography>Powered by Nuvo Cargo</Typography>
      <Box mr="auto" />
      <Typography>Help</Typography>
    </Stack>
  );
};

export default Footer;
