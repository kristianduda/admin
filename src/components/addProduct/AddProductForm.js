import { Box, Card, CardContent, Grid, TextField, MenuItem, FormControlLabel, Switch, InputAdornment, Button } from '@mui/material';
import { Formik } from 'formik';
import React from 'react';

const productCategory = [
  { value: 1, label: 'Torty' },
  { value: 3, label: 'Koláče' },
  { value: 5, label: 'Špeciality' }
];

const productShape = [
  { value: 1, label: 'Kruh' },
  { value: 3, label: 'Štvorec' },
  { value: 5, label: 'Šesťuholník' },
  { value: 7, label: 'Hviezda' },
  { value: 9, label: 'Srdce' },
  { value: 11, label: 'Trojuholník' }
];

const AddProductForm = ({ initialData, addProduct }) => {
  const onSubmit = async (data, { setSubmitting }) => {
    // Sem spracovať dáta
    await addProduct(data);
    setSubmitting(false);
  };

  const onChange = (e, setValue) => {
    setValue(e.target.name, e.target.value);
  };
  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ values, handleSubmit, setFieldValue, isSubmitting }) => {
        console.log(values);
        return (
          <form onSubmit={handleSubmit}>
            <Card>
              <CardContent>
                <Grid container spacing={5}>
                  <Grid
                    item
                    lg={4}
                    md={6}
                    xs={12}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    <TextField
                      label="Kategória produktu"
                      name="category"
                      value={values.category}
                      onChange={(e) => onChange(e, setFieldValue)}
                      select
                      margin="normal"
                    >
                      {productCategory.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                    <TextField
                      label="Názov produktu"
                      name="name"
                      value={values.name}
                      onChange={(e) => onChange(e, setFieldValue)}
                      margin="normal"
                    />
                    <TextField
                      label="Príchuť"
                      name="flavour"
                      value={values.flavour}
                      onChange={(e) => onChange(e, setFieldValue)}
                      margin="normal"
                    />
                    <TextField
                      label="Hmotnosť"
                      name="weight"
                      value={values.weight}
                      onChange={(e) => onChange(e, setFieldValue)}
                      margin="normal"
                      type="number"
                    />
                    <TextField
                      label="Čas dodania"
                      name="deliveryDate"
                      value={values.deliveryDate}
                      onChange={(e) => onChange(e, setFieldValue)}
                      margin="normal"
                      type="number"
                      placeholder="Zadajte počet dní"
                    />
                  </Grid>
                  <Grid item lg={4} md={6} xs={12} sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField name="photo" type="file" margin="normal" />
                    <FormControlLabel
                      control={
                        <Switch
                          name="hasShape"
                          checked={values.hasShape}
                          onChange={(e) => setFieldValue(e.target.name, e.target.checked)}
                        />
                      }
                      label="Má produkt tvar?"
                      style={{ margin: '21px 0px' }}
                    />
                    <TextField
                      label="Tvar produktu"
                      name="shape"
                      value={values.shape}
                      onChange={(e) => onChange(e, setFieldValue)}
                      select
                      margin="normal"
                    >
                      {productShape.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    <TextField
                      label="Cena"
                      name="price"
                      value={values.price}
                      onChange={(e) => onChange(e, setFieldValue)}
                      margin="normal"
                      type="number"
                    />
                  </Grid>
                  <Grid item lg={4} md={12} xs={12}>
                    <TextField
                      fullWidth
                      label="Zloženie"
                      name="composition"
                      value={values.composition}
                      onChange={(e) => onChange(e, setFieldValue)}
                      margin="normal"
                      placeholder="Zadajte vždy len 1 surovinu a pridajte"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button variant="contained">Pridať</Button>
                          </InputAdornment>
                        )
                      }}
                    />
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <Button variant="contained" type="submit" disabled={isSubmitting}>
                Uložiť
              </Button>
            </Box>
          </form>
        );
      }}
    </Formik>
  );
};

export default AddProductForm;
