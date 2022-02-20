import { useState } from 'react';
import { Box, Container } from '@mui/material';
import DataToolbar from './DataToolbar';
import DataGrid from './DataGrid';
import DataDetail from './DataDetail';
import Form from './Form';
import ConfirmDialog from './ConfirmDialog';

const DataWrapper = ({
  columns,
  data,
  total,
  onGet,
  onAdd,
  onEdit,
  onDelete,
  validationSchema
}) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [rowData, setRowData] = useState({});

  const onAddClick = () => {
    setIsOpenEdit(true);
    setRowData({});
  };

  const onCloseEdit = () => {
    setIsOpenEdit(false);
  };

  const onEditClick = (row) => {
    setIsOpenEdit(true);
    setRowData(row);
  };

  const onDeleteClick = (row) => {
    setIsOpenDelete(true);
    setRowData(row);
  };

  const onCloseDelete = () => {
    setIsOpenDelete(false);
  };

  const onConfirmDelete = async () => {
    await onDelete(rowData._id);
    await onGet();
    setIsOpenDelete(false);
  };

  const onSubmit = async (d, { setSubmitting }) => {
    if (d._id) {
      await onEdit(d);
    } else {
      await onAdd(d);
    }
    await onGet();
    setSubmitting(false);
    setIsOpenEdit(false);
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
          <DataGrid
            onGet={onGet}
            columns={columns}
            data={data}
            total={total}
            onEdit={onEditClick}
            onDelete={onDeleteClick}
          />
        </Box>
      </Container>
      <DataDetail isOpen={isOpenEdit} onClose={onCloseEdit}>
        <Form
          columns={columns}
          initialData={rowData}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        />
      </DataDetail>
      <ConfirmDialog 
        isOpen={isOpenDelete}
        onClose={onCloseDelete}
        onConfirm={onConfirmDelete}
      />
    </Box>
  );
};

export default DataWrapper;
