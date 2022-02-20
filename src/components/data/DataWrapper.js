import { useState } from 'react';
import { Box, Container } from '@mui/material';
import DataToolbar from './DataToolbar';
import DataGrid from './DataGrid';
import DataDetail from './DataDetail';
import Form from '../form/Form';

const DataWrapper = ({
  columns,
  data,
  total,
  onGet,
  onAdd,
  onEdit,
  validationSchema
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rowData, setRowData] = useState({});

  const onAddClick = () => {
    setIsOpen(true);
    setRowData({});
  };

  const onClose = () => {
    setIsOpen(false);
  };

  const onEditClick = (row) => {
    setIsOpen(true);
    setRowData(row);
  };

  const onSubmit = async (d, { setSubmitting }) => {
    if (d._id) {
      await onEdit(d);
    } else {
      await onAdd(d);
    }
    await onGet();
    setSubmitting(false);
    setIsOpen(false);
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
        <DataToolbar onAdd={onAddClick} />
        <Box sx={{ pt: 3 }}>
          {/* <CustomerListResults customers={customers} /> */}
          <DataGrid
            onGet={onGet}
            columns={columns}
            data={data}
            total={total}
            onEdit={onEditClick}
          />
        </Box>
      </Container>
      <DataDetail isOpen={isOpen} onClose={onClose}>
        <Form
          columns={columns}
          initialData={rowData}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </DataDetail>
    </Box>
  );
};

export default DataWrapper;
