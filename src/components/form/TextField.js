import TextFieldComponent from '@mui/material/TextField';

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
    <TextFieldComponent
      error={Boolean(errorText)}
      fullWidth={fullWidth}
      helperText={errorText}
      label={label}
      name={name}
      onBlur={onBlur}
      onChange={e => setValue(name, e.target.value)}
      value={value}
      variant={variant}
      margin={margin}
      disabled={disabled}
    />
  );
}
