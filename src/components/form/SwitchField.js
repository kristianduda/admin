import { Switch, FormControlLabel } from '@mui/material';

export default function SwitchField({
  value,
  setValue,
  name,
  label,
  margin,
  disabled,
}) {
  return (
    <FormControlLabel
      control={
        <Switch
          checked={value}
          onChange={e => setValue(name, e.target.checked)}
        />
      }
      label={label}
      margin={margin}
      disabled={disabled}
    />
  );
}
