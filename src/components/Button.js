import Button from "@mui/material/Button";

const StyledButton = ({ text, icon, color, ...props }) => {
  return (
    <Button variant="contained" color={color} endIcon={icon} {...props}>
      {text}
    </Button>
  );
};

export default StyledButton;
