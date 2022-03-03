import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Box, Container, Grid, Pagination } from '@mui/material';
import ProductListToolbar from '../components/product/ProductListToolbar';
import ProductCard from '../components/product/ProductCard';
import { useCukro } from 'src/contexts/cukro';

const ProductList = () => {
  const { products, getProducts, deleteProduct, setProduct } = useCukro();

  useEffect(async () => {
    await getProducts();
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
          <ProductListToolbar setProduct={setProduct} />
          <Box sx={{ pt: 5 }}>
            <Grid container spacing={3}>
              {products.data.map((product) => (
                <Grid item key={product._id} lg={3} md={4} xs={12}>
                  <ProductCard product={product} deleteProduct={deleteProduct} />
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
