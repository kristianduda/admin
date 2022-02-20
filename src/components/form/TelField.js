import PhoneInput from 'react-phone-input-2';
import { FormControl, FormHelperText } from '@mui/material';
import 'react-phone-input-2/lib/material.css';

export default function TelInput({
  value,
  onChange,
  fullWidth,
  country,
  error,
  helperText,
  label
}) {
  return (
    <FormControl fullWidth={fullWidth} error={error}>
      <PhoneInput
        inputStyle={fullWidth ? { width: '100%' } : null}
        country={country}
        value={value}
        onChange={onChange}
        specialLabel={label}
        countryCodeEditable={false}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
