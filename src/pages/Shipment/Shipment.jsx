import React from "react";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router-dom";

const Shipment = () => {
  const { orderId } = useParams();
  return <Typography variant="h1">{orderId}</Typography>;
};

export default Shipment;
