import React from "react";
import StyledTextField from "../UI/StyledTextField";

const QuerySearch = React.forwardRef((props, ref) => {
  return (
    <StyledTextField
      label="QUERY"
      textColor="#fff"
      labelColor="#fff"
      ref={ref}
    />
  );
});

export default QuerySearch;
