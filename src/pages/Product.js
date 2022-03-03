import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { Box, Container, Typography } from '@mui/material';
import { useCukro } from 'src/contexts/cukro';
import ProductForm from 'src/components/product/ProductForm';

export default function Product() {
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
        <Typography variant="h1">{Object.keys(productId).length > 0 ? 'Úprava produktu' : 'Nový produkt'}</Typography>
      </Box>
      <Container maxWidth="lg">
        <ProductForm categoryList={categoryList} productId={productId.id} />
      </Container>
    </Box>
  );
}
