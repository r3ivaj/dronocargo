import fakeData from "../fakeData";

const STORAGE_KEY = "@@Dronocargo/DeliveryHistory";

/**
 * Feed the localStorage with fake data if it's empty
 */
const initialize = () => {
  try {
    if (localStorage.getItem(STORAGE_KEY) === null) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fakeData));
    }
  } catch (error) {
    console.error(error);
  }
};

const update = (data) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

const getAll = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return JSON.parse(raw);
  } catch (error) {
    console.error(error);
  }
};

const DeliveryHistoryStorageService = {
  initialize,
  update,
  getAll,
};

export default DeliveryHistoryStorageService;
