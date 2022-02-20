import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon
} from '@mui/material';
import { Search as SearchIcon } from 'react-feather';
import FormDialog from '../form/FormDialog';

const CustomerListToolbar = ({ columns }) => {
  const [open, setOpen] = useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={{ mt: 3 }}>
        <Card>
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Box sx={{ maxWidth: 500, flex: 1 }}>
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
                  placeholder="Search customer"
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  display: 'flex'
                  // justifyContent: 'flex-end'
                }}
              >
                <Button>Import</Button>
                <Button sx={{ mx: 1 }}>Export</Button>
                <Button color="primary" variant="contained" onClick={handleOpen}>
                  Add customer
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
      <FormDialog
        columns={columns}
        open={open}
        handleClose={handleClose}
      />
    </Box>
  );
};

export default CustomerListToolbar;
