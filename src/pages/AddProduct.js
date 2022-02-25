import { Box, Button, Container, Typography } from '@mui/material';
import React, { useState } from 'react';
import AddProductForm from 'src/components/addProduct/AddProductForm';
import { useCukro } from 'src/contexts/cukro';

export default function AddProduct() {
  const { addProduct } = useCukro();
  const [product, setProduct] = useState({
    categoryRefs: [],
    name: '',
    flavour: '',
    weight: 0,
    deliveryDate: 0,
    hasShape: false,
    shape: '',
    price: 0,
    composition: '',
    materials: []
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
        <Typography variant="h1">Nový produkt</Typography>
      </Box>
      <Container maxWidth="lg">
        <AddProductForm initialData={product} addProduct={addProduct} />
      </Container>
    </Box>
  );
}
