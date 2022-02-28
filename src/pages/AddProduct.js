import { Box, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AddProductForm from 'src/components/addProduct/AddProductForm';
import { useCukro } from 'src/contexts/cukro';

export default function AddProduct() {
  const { addProduct, getCategoryList, categoryList } = useCukro();

  const [product, setProduct] = useState({
    categoryId: '',
    name: '',
    weight: '',
    deliveryDate: '',
    hasShape: false,
    flavour: '',
    shape: '',
    price: '',
    material: '',
    materials: [],
    minimumAmount: 1
  });

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
        <Typography variant="h1">Nový produkt</Typography>
      </Box>
      <Container maxWidth="lg">
        <AddProductForm initialData={product} addProduct={addProduct} categoryList={categoryList} />
      </Container>
    </Box>
  );
}
