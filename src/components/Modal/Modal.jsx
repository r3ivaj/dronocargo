import React from "react";
import MuiModal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { X } from "react-bootstrap-icons";
import IconButton from "@mui/material/IconButton";

import Icon from "../Icon/Icon";

import {
  modalStyle,
  headerStyle,
  containerStyle,
  footerContainerStyle,
  bodyContainerStyle,
} from "./Modal.styles";

const Modal = ({
  open,
  onClose,
  title,
  description,
  renderFooter,
  renderBody,
  width,
}) => {
  return (
    <MuiModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
    >
      <Box style={modalStyle} width={width}>
        <Box sx={containerStyle}>
          <Box component="header" sx={headerStyle}>
            <Stack direction="row">
              <Typography id="modal-title" variant="h3">
                {title}
              </Typography>
              <Box mr="auto" />
              <Box mt="-1rem">
                <IconButton onClick={onClose}>
                  <Icon component={<X />} size="2rem" />
                </IconButton>
              </Box>
            </Stack>
          </Box>
          <Typography id="modal-description" sx={{ mt: "1rem" }}>
            {description}
          </Typography>
          {renderBody && <Box sx={bodyContainerStyle}>{renderBody()}</Box>}
        </Box>
        {renderFooter && <Box sx={footerContainerStyle}>{renderFooter()}</Box>}
      </Box>
    </MuiModal>
  );
};

export default Modal;
