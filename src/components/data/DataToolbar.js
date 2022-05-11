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

let _timeout;
const DataToolbar = ({ onAdd, disabled, onChange, searchbar }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    if (_timeout !== null) {
      clearTimeout(_timeout);
    }
    _timeout = setTimeout(() => {
      onChange(e.target.value);
    }, 500);

    setSearch(e.target.value);
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
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
      {searchbar && (
        <Box>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ maxWidth: 500, flex: 1 }}>
                  <TextField
                    fullWidth
                    value={search}
                    onChange={handleChange}
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
              </Box>
            </CardContent>
          </Card>
        </Box>
      )}
    </Box>
  );
};

export default DataToolbar;
