import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const StyledSelect = ({
  items,
  label,
  value,
  onChange,
  labelClassName,
  ...props
}) => {
  return (
    <FormControl style={{ width: "200px" }}>
      <InputLabel id="label" className={labelClassName}>
        {label.toUpperCase()}
      </InputLabel>
      <Select
        value={value}
        label={label}
        onChange={onChange}
        labelId="label"
        {...props}
      >
        <MenuItem value="">NONE</MenuItem>
        {items?.map((item, index) => {
          return (
            <MenuItem value={item} key={index}>
              {item.toUpperCase()}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default StyledSelect;
