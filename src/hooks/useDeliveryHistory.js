import { useState } from "react";
import DeliveryHistoryStorageService from "../services/DeliveryHistoryStorageService";

const useDeliveryHistory = () => {
  const [deliveryHistory, setDeliveryHistory] = useState(
    DeliveryHistoryStorageService.getAll()
  );

  return [deliveryHistory, setDeliveryHistory];
};

export default useDeliveryHistory;
