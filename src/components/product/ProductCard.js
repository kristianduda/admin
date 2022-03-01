import PropTypes from 'prop-types';
import { Box, Card, CardContent, Divider, Grid, Typography, Tooltip, IconButton, Button } from '@mui/material';
import ProductIcon from './ProductIcon';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import MoveUpIcon from '@mui/icons-material/MoveUp';

const ProductCard = ({ product, deleteProduct, editProduct, getProducts }) => {
  console.log('delete: ', deleteProduct);
  const actions = [
    {
      label: 'edit',
      value: 1,
      element: <ModeEditIcon color="action" />,
      description: 'Upraviť produkt'
    },
    {
      label: 'disable',
      value: 3,
      element: <DoDisturbIcon color="action" />,
      description: 'Označiť ako nedostupné'
    },
    {
      label: 'promote',
      value: 5,
      element: <MoveUpIcon color="action" />,
      description: 'Pridať na úvodnú stránku'
    },
    {
      label: 'delete',
      value: 7,
      element: <DeleteForeverIcon color="action" />,
      description: 'Odstrániť',
      action: async (id) => {
        await deleteProduct(id);
        await getProducts();
      }
    }
  ];

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
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
        <Grid container sx={{ justifyContent: 'space-around' }}>
          {actions.map((action) => (
            <Tooltip title={action.description} key={action.value}>
              <IconButton onClick={() => action.action(product._id)}>{action.element}</IconButton>
            </Tooltip>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductCard;
