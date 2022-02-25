import { Box, Button, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddProductForm from 'src/components/addProduct/AddProductForm';
import { useCukro } from 'src/contexts/cukro';

export default function AddProduct() {
  const { addProduct, getCategory, category } = useCukro();

  const [product, setProduct] = useState({
    categoryRefs: [{ id: '' }],
    name: '',
    weight: 0,
    deliveryDate: 0,
    hasShape: false,
    variants: { flavour: '', shape: '' },
    price: 0,
    material: '',
    materials: []
  });

  useEffect(() => {
    getCategory();
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
        <Typography variant="h1">Nový produkt</Typography>
      </Box>
      <Container maxWidth="lg">
        <AddProductForm initialData={product} addProduct={addProduct} categoryData={category.data} />
      </Container>
    </Box>
  );
}
