import React from "react";
import { TextField } from "@mui/material";

const StyledTextField = React.forwardRef(
  ({ label, textColor, labelColor, ...props }, ref) => {
    return (
      <TextField
        inputRef={ref}
        label={label}
        variant="outlined"
        InputProps={{
          style: { color: textColor },
        }}
        InputLabelProps={{
          style: { color: labelColor },
        }}
        {...props}
      />
    );
  }
);

export default StyledTextField;
