import PropTypes from 'prop-types';
import { Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GetAppIcon from '@mui/icons-material/GetApp';
import ProductIcon from './ProductIcon';

const ProductCard = ({ product, ...rest }) => (
  <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          pb: 2
        }}
      >
        <ProductIcon productType={product.categoryRefs[0].id} />
        <Typography color="textPrimary" gutterBottom variant="h4" mx={2}>
          {product.name}
        </Typography>
      </Box>

      <Typography pb={2}>Kategória: {product.categoryRefs[0].name}</Typography>
      {product.variants !== null && product.variants.flavour.length > 0 && (
        <Typography pb={1}>Príchuť: {product.variants.flavour}</Typography>
      )}
      {product.variants !== null && product.variants.shape.length > 0 && <Typography pb={1}>Tvar: {product.variants.shape}</Typography>}
      {product.weight > 0 && <Typography pb={1}>Hmotnosť: {product.weight} gramov</Typography>}
      {product.deliveryDate > 0 && (
        <Typography pb={1}>
          Čas dodania: {product.deliveryDate} {product.deliveryDate === 1 ? 'deň' : 'dni'}
        </Typography>
      )}
      {product.minimumAmount > 0 && <Typography pb={1}>Minimálny odber: {product.minimumAmount} ks</Typography>}
      <Typography pb={1}>Cena: {product.price}€</Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid container spacing={2} sx={{ justifyContent: 'space-between' }}>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <AccessTimeIcon color="action" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            Updated 2hr ago
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <GetAppIcon color="action" />
          <Typography color="textSecondary" display="inline" sx={{ pl: 1 }} variant="body2">
            {product.totalDownloads} Downloads
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
);

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
