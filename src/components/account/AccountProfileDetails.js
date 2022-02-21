import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import TelField from '../form/TelField';
import TextField from '../form/TextField';
import SelectField from '../form/SelectField';
import countryCodes from './countryCodes';

const AccountProfileDetails = ({ user, updateUser }) => {
  const onSubmit = async (data, { setSubmitting, setFieldValue }) => {
    data.avatar = null;
    await updateUser(data);
    setSubmitting(false);
    setFieldValue('password', '');
    setFieldValue('passwordConfirmation', '');
  };

  return (
    <Formik
      initialValues={user}
      validationSchema={Yup.object().shape({
        name: Yup.string().max(255).required('Name is required'),
        password: Yup.string().matches(
          /^(\S{6,})?$/,
          'Password must have at least 6 characters'
        ),
        passwordConfirmation: Yup.string().oneOf(
          [Yup.ref('password')],
          'Passwords must match'
        )
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
            {/* <CardHeader
              subheader="The information can be edited"
              title="Profile"
            />
            <Divider /> */}
            <CardContent>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="Name"
                    name="name"
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="Email Address"
                    name="email"
                    disabled
                    onBlur={handleBlur}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TelField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="Phone"
                    name="tel"
                    value={values.tel}
                    country={values.country}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="Address"
                    name="address"
                    onBlur={handleBlur}
                    value={values.address}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <SelectField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="Country"
                    name="countryId"
                    value={values.countryId}
                    variant="outlined"
                    data={countryCodes}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="City"
                    name="city"
                    value={values.city}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="PostCode"
                    name="postCode"
                    value={values.postCode}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="Password"
                    name="password"
                    type="password"
                    value={values.password}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    fullWidth
                    errorText={touched.name && errors.name}
                    setValue={setFieldValue}
                    label="Repeated password"
                    name="passwordConfirmation"
                    type="password"
                    value={values.passwordConfirmation}
                    variant="outlined"
                  />
                </Grid>
              </Grid>
            </CardContent>
            {/* <Divider /> */}
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
                Save details
              </Button>
            </Box>
          </Card>
        </form>
      )}
    </Formik>
  );
};

export default AccountProfileDetails;
