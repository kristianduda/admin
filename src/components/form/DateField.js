import { TextField } from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';

export default function DateField({
  value,
  setValue,
  fullWidth,
  name,
  label,
  variant,
  margin,
  disabled,
}) {
  return (
    <DatePicker
      key={name}
      label={label}
      value={value}
      onChange={v => setValue(name, v)}
      disabled={disabled}
      renderInput={(params) => (
        <TextField
          {...params}
          fullWidth={fullWidth}
          variant={variant}
          margin={margin}
        />
      )}
    />
  );
}
