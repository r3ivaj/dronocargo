import React, { useState } from "react";
import { Search } from "react-bootstrap-icons";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";

import Button from "../../components/Button/Button";
import DeliveryModal from "./components/DeliveryModal";
import TextField from "../../components/TextField/TextField";
import Icon from "../../components/Icon/Icon";
import { grey } from "../../theme/colors";
import DeliveryHistoryTable from "./components/DeliveryHistoryTable";
import { pxToRem } from "../../utils/styles";

import useDeliveryHistory from "../../hooks/useDeliveryHistory";

const DeliveryHistory = () => {
  const [shouldOpenDeliveryModal, setShouldOpenDeliveryModal] = useState(false);
  const [deliveryHistory, setDeliveryHistory] = useDeliveryHistory();

  const closeDeliveryModal = () => setShouldOpenDeliveryModal(false);
  const openDeliveryModal = () => setShouldOpenDeliveryModal(true);

  return (
    <Box>
      <Stack direction="row">
        <Stack direction="row">
          <Typography variant="h1">Delivery</Typography>
          <Box mr="1rem" />
          <Typography variant="h2">History</Typography>
        </Stack>
        <Box mr="auto" />
        <Stack direction="row">
          <TextField
            startAdornment={
              <InputAdornment position="start">
                <Icon component={<Search />} color={grey[100]} />
              </InputAdornment>
            }
          />
          <Box mr="1rem" />
          <Button variant="contained" onClick={openDeliveryModal}>
            New Delivery
          </Button>
        </Stack>
      </Stack>
      <Box mb={pxToRem(50)} />
      <DeliveryHistoryTable items={deliveryHistory} />
      {shouldOpenDeliveryModal && (
        <DeliveryModal
          open={shouldOpenDeliveryModal}
          onClose={closeDeliveryModal}
          deliveryHistory={deliveryHistory}
          setDeliveryHistory={setDeliveryHistory}
        />
      )}
    </Box>
  );
};

export default DeliveryHistory;
