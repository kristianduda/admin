import React from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  TextField,
  MenuItem,
  FormControlLabel,
  Switch,
  InputAdornment,
  Button,
  Stack,
  Chip
} from '@mui/material';
import { FieldArray, Formik } from 'formik';

const AddProductForm = ({ initialData, addProduct, categoryData }) => {
  const productCategory = categoryData.map((x) => {
    return { id: x._id, name: x.name };
  });

  const productShape = [
    { value: 1, label: 'Kruh' },
    { value: 3, label: 'Štvorec' },
    { value: 5, label: 'Šesťuholník' },
    { value: 7, label: 'Hviezda' },
    { value: 9, label: 'Srdce' },
    { value: 11, label: 'Trojuholník' }
  ];

  const onSubmit = async (data, { setSubmitting, resetForm }) => {
    await addProduct(data);
    setSubmitting(false);
    resetForm();
  };

  const onChange = (e, setValue) => {
    setValue(e.target.name, e.target.value);
  };

  return (
    <Formik initialValues={initialData} onSubmit={onSubmit}>
      {({ values, handleSubmit, setFieldValue, isSubmitting }) => {
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
                      value={values.categoryRefs[0].id}
                      name={`categoryRefs[${0}].id`}
                      onChange={(e) => onChange(e, setFieldValue)}
                      select
                      margin="normal"
                    >
                      {productCategory.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                          {option.name}
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
                      name="variants.flavour"
                      value={values.variants.flavour}
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
                      InputProps={{
                        endAdornment: <InputAdornment position="end">gramov</InputAdornment>
                      }}
                    />
                    <TextField
                      label="Čas dodania"
                      name="deliveryDate"
                      value={values.deliveryDate}
                      onChange={(e) => onChange(e, setFieldValue)}
                      margin="normal"
                      type="number"
                      placeholder="Zadajte počet dní"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">dní</InputAdornment>
                      }}
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
                    {values.hasShape && (
                      <TextField
                        label="Tvar produktu"
                        name="variants.shape"
                        value={values.variants.shape}
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
                    )}

                    <TextField
                      label="Cena"
                      name="price"
                      value={values.price}
                      onChange={(e) => onChange(e, setFieldValue)}
                      margin="normal"
                      type="number"
                      InputProps={{
                        endAdornment: <InputAdornment position="end">EUR</InputAdornment>
                      }}
                    />
                  </Grid>
                  <Grid item lg={4} md={12} xs={12}>
                    <FieldArray name="materials">
                      {(fieldArrayProps) => {
                        const { push, remove, form } = fieldArrayProps;
                        const { values, setFieldValue } = form;
                        const addMaterial = (material) => {
                          push(material);
                          setFieldValue('material', '');
                        };
                        return (
                          <>
                            <TextField
                              fullWidth
                              label="Zloženie"
                              name="material"
                              value={values.material}
                              onChange={(e) => onChange(e, setFieldValue)}
                              margin="normal"
                              placeholder="Zadajte vždy len 1 surovinu a pridajte"
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <Button variant="contained" onClick={() => addMaterial(values.material)}>
                                      Pridať
                                    </Button>
                                  </InputAdornment>
                                )
                              }}
                            />
                            {values.materials.length > 0 && (
                              <Stack spacing={1} direction="row" sx={{ display: 'flex', flexWrap: 'wrap' }}>
                                {values.materials.map((material, index) => (
                                  <Chip key={index} label={material} onDelete={() => remove(index)} />
                                ))}
                              </Stack>
                            )}
                          </>
                        );
                      }}
                    </FieldArray>
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
