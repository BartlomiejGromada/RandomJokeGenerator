import { Checkbox, FormControlLabel } from "@mui/material";

const StyledCheckbox = ({ checked, label, ...props }) => {
  return (
    <FormControlLabel
      control={<Checkbox color="secondary" checked={checked} />}
      label={label}
      {...props}
    />
  );
};

export default StyledCheckbox;
