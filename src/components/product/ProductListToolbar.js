import { Box, Button, Card, CardContent, TextField, InputAdornment, SvgIcon } from '@mui/material';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

let _filter, _sort, _page;
const ProductListToolbar = (props) => {
  let navigate = useNavigate();

  const newProduct = () => {
    navigate('../products/new');
  };

  return (
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        <Button color="primary" variant="contained" onClick={newProduct}>
          Pridať produkt
        </Button>
      </Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ maxWidth: 500 }}>
              <TextField
                fullWidth
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SvgIcon fontSize="small" color="action">
                        <SearchIcon />
                      </SvgIcon>
                    </InputAdornment>
                  )
                }}
                placeholder="Search product"
                variant="outlined"
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default ProductListToolbar;
