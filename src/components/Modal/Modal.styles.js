import { grey } from "../../theme/colors";

export const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "35rem",
  background: "white",
  border: 0,
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.07)",
  borderRadius: "4px",
};

export const headerStyle = {};

export const containerStyle = {
  margin: "2rem",
};

export const footerContainerStyle = {
  borderTop: `1px solid ${grey[50]}`,
  padding: "1.5rem",
};

export const bodyContainerStyle = {
  marginTop: "2rem",
  marginBottom: "2rem",
};
