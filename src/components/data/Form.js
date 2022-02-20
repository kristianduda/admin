import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  MenuItem,
  FormControlLabel,
  Switch
} from '@mui/material';
// import FacebookIcon from '../icons/Facebook';
// import GoogleIcon from '../icons/Google';
import { useAuth } from 'src/contexts/auth';
import DatePicker from '@mui/lab/DatePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';

const Form = ({ columns, initialData, onSubmit, validationSchema }) => {
  return (
    <Formik
      initialValues={initialData}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          {columns.map((x) => {
            switch (x.type) {
              case 'number':
                return (
                  <TextField
                    key={x.field}
                    error={Boolean(touched[x.field] && errors[x.field])}
                    fullWidth
                    helperText={touched[x.field] && errors[x.field]}
                    label={x.headerName}
                    name={x.field}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="number"
                    value={values[x.field]}
                    variant="outlined"
                    margin="normal"
                  />
                );

              case 'date':
                return (
                  <DatePicker
                    key={x.field}
                    label={x.headerName}
                    value={values[x.field]}
                    onChange={(newValue) => {
                      setFieldValue(x.field, newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                      />
                    )}
                  />
                );
              case 'dateTime':
                return (
                  <DateTimePicker
                    key={x.field}
                    label={x.headerName}
                    value={values[x.field]}
                    onChange={(newValue) => {
                      setFieldValue(x.field, newValue);
                    }}
                    ampm={false}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        variant="outlined"
                        margin="normal"
                      />
                    )}
                  />
                );
              case 'singleSelect':
                return (
                  <TextField
                    key={x.field}
                    error={Boolean(touched[x.field] && errors[x.field])}
                    fullWidth
                    helperText={touched[x.field] && errors[x.field]}
                    label={x.headerName}
                    name={x.field}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="number"
                    value={values[x.field]}
                    variant="outlined"
                    select
                    margin="normal"
                  >
                    {x.valueOptions.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                );
              case 'boolean':
                return (
                  <FormControlLabel
                    key={x.field}
                    control={
                      <Switch
                        checked={values[x.field]}
                        onChange={(e) =>
                          setFieldValue(x.field, e.target.checked)
                        }
                      />
                    }
                    label={x.headerName}
                    margin="normal"
                  />
                );
              case 'string':
              default:
                return (
                  <TextField
                    key={x.field}
                    error={Boolean(touched[x.field] && errors[x.field])}
                    fullWidth
                    helperText={touched[x.field] && errors[x.field]}
                    label={x.headerName}
                    name={x.field}
                    margin="normal"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    // type="password"
                    value={values[x.field]}
                    variant="outlined"
                  />
                );
            }
          })}
          <Box sx={{ py: 2, display: 'flex', justifyContent: 'end' }}>
            <Button
              color="primary"
              disabled={isSubmitting}
              size="large"
              type="submit"
              variant="contained"
            >
              Save
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
