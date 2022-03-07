import PropTypes from 'prop-types';
import { Box, Card, CardContent, Divider, Grid, Typography, Tooltip, IconButton } from '@mui/material';
import ProductIcon from './ProductIcon';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import MoveUpIcon from '@mui/icons-material/MoveUp';
import { useNavigate } from 'react-router';

const ProductCard = ({ item, deleteProduct, updateProduct }) => {
  let navigate = useNavigate();

  let newProduct = {
    categoryId: item.categoryRefs[0].id,
    name: item.name,
    weight: item.weight,
    deliveryDate: item.deliveryDate,
    hasShape: item.variants.shape.length > 0,
    flavour: item.variants.flavour,
    shape: item.variants.shape,
    price: item.price,
    material: '',
    materials: item.materials,
    minimumAmount: item.minimumAmount,
    disabled: item.disabled,
    promote: item.promote
  };

  const productCategoryName = (categoryId) => {
    switch (categoryId) {
      case '6217af354c49a4266b3007ac':
        return 'Koláče';
      case '6217af9b4c49a4266b3007ad':
        return 'Torty';
      default:
        return 'Špeciality';
    }
  };

  const edit = (id) => {
    navigate(`../product/${id}`);
  };

  const markAsUnavailble = async (id) => {
    let data = {
      ...newProduct,
      disabled: !item.disabled
    };

    await updateProduct(id, data);
  };

  const promote = async (id) => {
    let data = {
      ...newProduct,
      promote: !item.promote
    };

    await updateProduct(id, data);
  };

  const actions = [
    {
      label: 'edit',
      value: 1,
      element: <ModeEditIcon color="action" />,
      description: 'Upraviť produkt',
      action: edit
    },
    {
      label: 'disable',
      value: 3,
      element: <DoDisturbIcon color="action" />,
      description: 'Označiť ako nedostupné',
      action: (id) => markAsUnavailble(id)
    },
    {
      label: 'promote',
      value: 5,
      element: <MoveUpIcon color="action" />,
      description: 'Pridať na úvodnú stránku',
      action: (id) => promote(id)
    },
    {
      label: 'delete',
      value: 7,
      element: <DeleteForeverIcon color="action" />,
      description: 'Odstrániť',
      action: async (id) => {
        await deleteProduct(id);
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
          <ProductIcon productType={item.categoryRefs[0]?.id} />
          <Typography color="textPrimary" gutterBottom variant="h4" mx={2}>
            {item.name}
          </Typography>
        </Box>

        <Typography pb={2}>Kategória: {productCategoryName(item.categoryRefs[0].id)}</Typography>
        {item.disabled && <Typography pb={2}>Produkt je nedostupný</Typography>}
        {item.promote && <Typography pb={2}>Produkt je pridaný na úvodnú stránku</Typography>}
        {item.variants !== null && item.variants.flavour.length > 0 && <Typography pb={1}>Príchuť: {item.variants.flavour}</Typography>}
        {item.variants !== null && item.variants.shape.length > 0 && <Typography pb={1}>Tvar: {item.variants.shape}</Typography>}
        {item.weight > 0 && <Typography pb={1}>Hmotnosť: {item.weight} gramov</Typography>}
        {item.deliveryDate > 0 && (
          <Typography pb={1}>
            Čas dodania: {item.deliveryDate} {item.deliveryDate === 1 ? 'deň' : 'dni'}
          </Typography>
        )}
        {item.minimumAmount > 0 && <Typography pb={1}>Minimálny odber: {item.minimumAmount} ks</Typography>}
        <Typography pb={1}>Cena: {item.price}€</Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Box sx={{ p: 2 }}>
        <Grid container sx={{ justifyContent: 'space-around' }}>
          {actions.map((action) => (
            <Tooltip title={action.description} key={action.value}>
              <IconButton onClick={() => action.action(item._id)}>{action.element}</IconButton>
            </Tooltip>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

ProductCard.propTypes = {
  item: PropTypes.object.isRequired
};

export default ProductCard;
