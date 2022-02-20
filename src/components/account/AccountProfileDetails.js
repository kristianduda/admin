import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
} from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import TelField from '../form/TelField';
import countryCodes from './countryCodes';

const AccountProfileDetails = ({ user, updateUser }) => {  
  const onSubmit = async (data, { setSubmitting }) => 
  {
    data.avatar = null;
    await updateUser(data);
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={user}
      validationSchema={Yup.object().shape({
        name: Yup.string().max(255).required('Name is required')
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
                    error={Boolean(touched.name && errors.name)}
                    fullWidth
                    helperText={touched.name && errors.name}
                    label="Name"
                    name="name"
                    onChange={handleChange}
                    value={values.name}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.email && errors.email)}
                    fullWidth
                    helperText={touched.email && errors.email}
                    label="Email Address"
                    name="email"
                    disabled
                    onBlur={handleBlur}
                    onChange={handleChange}
                    type="email"
                    value={values.email}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TelField
                    error={Boolean(touched.tel && errors.tel)}
                    fullWidth
                    helperText={touched.tel && errors.tel}
                    label="Phone"
                    name="tel"
                    onChange={(value) => setFieldValue('tel', value)}
                    value={values.tel}
                    country={values.country}
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.address && errors.address)}
                    fullWidth
                    helperText={touched.address && errors.address}
                    label="Address"
                    name="address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.tel && errors.tel)}
                    fullWidth
                    helperText={touched.tel && errors.tel}
                    label="Country"
                    name="countryId"
                    onChange={handleChange}
                    select
                    SelectProps={{ native: true }}
                    value={values.countryId}
                    variant="outlined"
                  >
                    {countryCodes.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </TextField>
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.city && errors.city)}
                    fullWidth
                    helperText={touched.city && errors.city}
                    label="City"
                    name="city"
                    onChange={handleChange}
                    value={values.city}
                    variant="outlined"
                  />
                </Grid>
                <Grid item md={6} xs={12}>
                  <TextField
                    error={Boolean(touched.postCode && errors.postCode)}
                    fullWidth
                    helperText={touched.postCode && errors.postCode}
                    label="PostCode"
                    name="postCode"
                    onChange={handleChange}
                    value={values.postCode}
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
