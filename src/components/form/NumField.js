import { TextField } from '@mui/material';

export default function NumField({
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
}) {
  return (
    <TextField
      error={Boolean(errorText)}
      fullWidth={fullWidth}
      helperText={errorText}
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={e => setValue(name, Number(e.target.value))}
      value={value ? value.toString() : ''}
      variant={variant}
      type="number"
      margin={margin}
      disabled={disabled}
    />
  );
}
