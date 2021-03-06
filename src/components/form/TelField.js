import PhoneInput from 'react-phone-input-2';
import { FormControl, FormHelperText } from '@mui/material';
import 'react-phone-input-2/lib/material.css';

export default function TelField({
  name,
  value,
  setValue,
  fullWidth,
  country,
  errorText,
  label
}) {
  return (
    <FormControl fullWidth={fullWidth} error={Boolean(errorText)}>
      <PhoneInput
        inputStyle={fullWidth ? { width: '100%' } : null}
        country={country}
        value={value}
        onChange={v => setValue(name, v)}
        specialLabel={label}
        countryCodeEditable={false}
      />
      <FormHelperText>{errorText}</FormHelperText>
    </FormControl>
  );
}
