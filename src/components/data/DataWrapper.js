import { useState } from 'react';
import { Box, Container } from '@mui/material';
import DataToolbar from './DataToolbar';
import DataGrid from './DataGrid';
import DataDetail from './DataDetail';

const CustomerList = ({ columns, data, total, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [detailData, setDetailData] = useState({});

  const onAdd = () => {
    setIsOpen(true);
    setDetailData({});
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onEdit = (row) => {
    setIsOpen(true);
    setDetailData(row);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <DataToolbar onAdd={onAdd} />
        <Box sx={{ pt: 3 }}>
          {/* <CustomerListResults customers={customers} /> */}
          <DataGrid
            onChange={onChange}
            columns={columns}
            data={data}
            total={total}
            onEdit={onEdit}
          />
        </Box>
      </Container>
      <DataDetail
        columns={columns}
        isOpen={isOpen}
        onClose={onClose}
        initialData={detailData}
      />
    </Box>
  );
};

export default CustomerList;
