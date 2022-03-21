import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import InputAdornment from "@mui/material/InputAdornment";
import { Search } from "react-bootstrap-icons";

import Autocomplete from "../../../components/Autocomplete/Autocomplete";
import Modal from "../../../components/Modal/Modal";
import Icon from "../../../components/Icon/Icon";
import TextField from "../../../components/TextField/TextField";
import Button from "../../../components/Button/Button";
import Select from "../../../components/Select/Select";
import { grey } from "../../../theme/colors";
import {
  getTechniciansOptions,
  getPlatformsOptions,
  getDronesOptions,
  isValid,
} from "./DeliveryModal.utils";
import { pxToRem } from "../../../utils/styles";
import DeliveryHistoryStorageService from "../../../services/DeliveryHistoryStorageService";

const DeliveryModal = ({
  open,
  onClose,
  deliveryHistory,
  setDeliveryHistory,
}) => {
  const stackProps = {
    direction: "row",
    sx: { "& > div": { flex: 1 }, gap: pxToRem(22) },
    mb: "2rem",
  };
  const technicians = getTechniciansOptions(deliveryHistory);
  const platforms = getPlatformsOptions(deliveryHistory);
  const drones = getDronesOptions(deliveryHistory);

  const [values, setValues] = useState({
    orderId: "",
    technician: null,
    platform: "",
    drone: "",
  });

  const updateValue = (prop, value) => {
    setValues((prevState) => ({
      ...prevState,
      [prop]: value,
    }));
  };

  const handleCreateNewDelivery = () => {
    if (isValid(values)) {
      setDeliveryHistory((prevState) => {
        const newValues = [
          { ...values, status: "Pending", technicalCheck: "Passed" },
          ...prevState,
        ];
        DeliveryHistoryStorageService.update(newValues);
        return newValues;
      });
      onClose();
    }
  };

  return (
    <Modal
      title="New Delivery"
      description="Please select the order ID and a technician to deploy the cargo. All
            elements are mandatory."
      open={open}
      onClose={onClose}
      renderBody={() => {
        return (
          <>
            <Stack {...stackProps}>
              <TextField
                label="Order ID"
                value={values.orderId}
                onChange={(event) => {
                  updateValue("orderId", event.target.value);
                }}
              />
              <Autocomplete
                label="Technician"
                value={values.technician}
                onChange={(event, value) => {
                  updateValue("technician", value);
                }}
                options={technicians}
                startAdornment={
                  <InputAdornment position="start">
                    <Icon
                      component={<Search />}
                      color={grey[100]}
                      size="1rem"
                    />
                  </InputAdornment>
                }
              />
            </Stack>
            <Stack {...stackProps}>
              <Select
                options={platforms}
                value={values.platform}
                onChange={(event) => {
                  updateValue("platform", event.target.value);
                }}
                label="Platform"
              />
              <Select
                options={drones}
                value={values.drone}
                onChange={(event) => {
                  updateValue("drone", event.target.value);
                }}
                label="Drone"
              />
            </Stack>
          </>
        );
      }}
      renderFooter={() => (
        <Stack direction="row" spacing={2}>
          <Box mr="auto" />
          <Button variant="contained" color="text" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleCreateNewDelivery}>
            Create new delivery
          </Button>
        </Stack>
      )}
      width="35rem"
    />
  );
};

export default DeliveryModal;
