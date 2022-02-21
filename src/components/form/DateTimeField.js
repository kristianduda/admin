import { TextField } from '@mui/material';
import DateTimePicker from '@mui/lab/DateTimePicker';

export default function DateTimeField({
  value,
  setValue,
  fullWidth,
  name,
  label,
  variant,
  margin,
  disabled
}) {
  return (
    <DateTimePicker
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
