import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Stack";
import { PersonCircle } from "react-bootstrap-icons";
import Icon from "../Icon/Icon";

const User = ({ name }) => {
  return (
    <Stack direction="row">
      <Box marginRight="0.625rem">{name}</Box>{" "}
      <Icon component={<PersonCircle />} size="1.25rem" />
    </Stack>
  );
};

export default User;
