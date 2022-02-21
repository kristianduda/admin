import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import TextField from '../form/TextField';

const SettingsPassword = ({ user, updateUser }) => {
  const onSubmit = async (data, { setSubmitting, resetForm }) => {
    const u = { ...user, ...data, avatar: null };
    await updateUser(u);
    setSubmitting(false);
    resetForm({
      values: {
        password: '',
        passwordConfirmation: ''
      }
    });
  };

  return (
    <Formik
      initialValues={{
        password: '',
        passwordConfirmation: ''
      }}
      validationSchema={Yup.object({
        password: Yup.string()
          .required('Password is required')
          .min(6, 'Password must have at least 6 characters'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Password is required')
      })}
      onSubmit={onSubmit}
    >
      {({
        errors,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
        touched,
        values
      }) => (
        <form onSubmit={handleSubmit}>
          <Card>
            <CardHeader subheader="Update password" title="Password" />
            <Divider />
            <CardContent>
              <TextField
                fullWidth
                errorText={touched.password && errors.password}
                setValue={setFieldValue}
                label="Password"
                name="password"
                type="password"
                value={values.password}
                onBlur={handleBlur}
                variant="outlined"
                margin="normal"
                type="password"
              />
              <TextField
                fullWidth
                errorText={touched.passwordConfirmation && errors.passwordConfirmation}
                setValue={setFieldValue}
                label="Repeated password"
                name="passwordConfirmation"
                type="password"
                value={values.passwordConfirmation}
                onBlur={handleBlur}
                variant="outlined"
                margin="normal"
                type="password"
              />
            </CardContent>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'flex-end',
                p: 2
              }}
            >
              <Button
                color="primary"
                variant="contained"
                type="submit"
                disabled={isSubmitting}
              >
                Update
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default SettingsPassword;
