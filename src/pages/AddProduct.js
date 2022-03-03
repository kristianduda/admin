import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, Container, Typography } from '@mui/material';
import { useCukro } from 'src/contexts/cukro';
import AddProductForm from 'src/components/addProduct/AddProductForm';

export default function AddProduct() {
  const { getCategoryList, categoryList, getProduct } = useCukro();

  // z url odchytit id produktu
  let productId = useParams();

  useEffect(async () => {
    await getCategoryList();

    //dotiahnuť daný produkt
    if (Object.keys(productId).length > 0) {
      await getProduct(productId.id);
    }
  }, []);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 5 }}>
        <Typography variant="h1">Nový produkt</Typography>
      </Box>
      <Container maxWidth="lg">
        <AddProductForm categoryList={categoryList} productId={productId.id} />
      </Container>
    </Box>
  );
}
