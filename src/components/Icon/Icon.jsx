import React from "react";
import { grey } from "../../theme/colors";

const Icon = ({ component, ...rest }) => {
  const defaultProps = {
    size: "1rem",
    color: grey[200],
  };

  return (
    <component.type
      {...component.props}
      {...defaultProps}
      {...rest}
    ></component.type>
  );
};

export default Icon;
