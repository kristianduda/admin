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

const Form = ({ columns, initialData }) => {
  const navigate = useNavigate();
  const { auth, showAlert } = useAuth();

  const onSubmit = async (data, { setSubmitting, resetForm }) => {
    // const isAuth = await auth(data.email, data.password);
    // if (isAuth) {
    //   navigate('/app/dashboard', { replace: true });
    // } else {
    //   setSubmitting(false);
    //   resetForm({
    //     values: {
    //       email: data.email,
    //       password: ''
    //     }
    //   });
    //   showAlert('unauthorized', 'error');
    // }
  };

  return (
    <Formik
      initialValues={initialData}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email('Must be a valid email')
          .max(255)
          .required('Email is required'),
        password: Yup.string().max(255).required('Password is required')
      })}
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
                    error={Boolean(touched[x.field] && errors[x.field])}
                    fullWidth
                    helperText={touched[x.field] && errors[x.field]}
                    label={x.headerName}
                    margin="normal"
                    name={x.field}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="number"
                    value={values[x.field]}
                    variant="outlined"
                  />
                );

              case 'date':
                return (
                  <DatePicker
                    label={x.headerName}
                    value={values[x.field]}
                    onChange={(newValue) => {
                      setFieldValue(x.field, newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        fullWidth
                        margin="normal"
                        variant="outlined"
                      />
                    )}
                  />
                );
              case 'dateTime':
                return (
                  <DateTimePicker
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
                        margin="normal"
                        variant="outlined"
                      />
                    )}
                  />
                );
              case 'singleSelect':
                return (
                  <TextField
                    error={Boolean(touched[x.field] && errors[x.field])}
                    fullWidth
                    helperText={touched[x.field] && errors[x.field]}
                    label={x.headerName}
                    margin="normal"
                    name={x.field}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="number"
                    value={values[x.field]}
                    variant="outlined"
                    select
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
                    control={
                      <Switch
                        checked={values[x.field]}
                        onChange={e => setFieldValue(x.field, e.target.checked)}
                      />
                    }
                    label={x.headerName}
                  />
                );
              case 'string':
              default:
                return (
                  <TextField
                    error={Boolean(touched[x.field] && errors[x.field])}
                    fullWidth
                    helperText={touched[x.field] && errors[x.field]}
                    label={x.headerName}
                    margin="normal"
                    name={x.field}
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
