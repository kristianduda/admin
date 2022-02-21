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

const CustomerListToolbar = ({ onAdd, disabled }) => {
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
                  placeholder="Search"
                  variant="outlined"
                />
              </Box>
              {!disabled && (
                <Box
                  sx={{
                    display: 'flex'
                  }}
                >
                  <Button color="primary" variant="contained" onClick={onAdd}>
                    Add
                  </Button>
                </Box>
              )}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default CustomerListToolbar;
