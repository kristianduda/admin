import { TextField, MenuItem } from '@mui/material';

export default function SelectField({
  value,
  setValue,
  fullWidth,
  name,
  errorText,
  label,
  variant,
  margin,
  disabled,
  onBlur,
  data
}) {
  return (
    <TextField
      error={Boolean(errorText)}
      fullWidth={fullWidth}
      helperText={errorText}
      label={label}
      name={name}
      onBlur={onBlur}
      setValue={e => setValue(name, e.target.value)}
      value={value}
      variant={variant}
      select
      margin={margin}
      disabled={disabled}
    >
      {data.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
