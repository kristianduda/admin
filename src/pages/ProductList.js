import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Pagination } from '@mui/material';
import ProductListToolbar from '../components/product/ProductListToolbar';
import ProductCard from '../components/product/ProductCard';
import products1 from '../__mocks__/products';
import { useCukro } from 'src/contexts/cukro';
import { useEffect } from 'react';

const ProductList = () => {
  const { products, getProducts, addProduct, editProduct, deleteProduct } = useCukro();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <Helmet>
        <title>Produkty | Cukro</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          <ProductListToolbar addProduct={addProduct} />
          <Box></Box>
          <Box sx={{ pt: 5 }}>
            <Grid container spacing={3}>
              {products1.map((product) => (
                <Grid item key={product.id} lg={3} md={4} xs={12}>
                  <ProductCard product={product} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              pt: 3
            }}
          >
            <Pagination color="primary" count={3} size="small" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductList;
