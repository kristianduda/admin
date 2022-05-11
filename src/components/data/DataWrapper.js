import { useState } from 'react';
import { Box, Container } from '@mui/material';
import DataToolbar from './DataToolbar';
import DataGrid from './DataGrid';
import DataDetail from './DataDetail';
import Form from './Form';
import ConfirmDialog from './ConfirmDialog';

let _filter, _sort, _page, _search;
const DataWrapper = ({
  columns,
  data,
  total,
  onGet,
  onAdd,
  onEdit,
  onDelete,
  validationSchema,
  isDisabled,
  searchbar,
  initialData
}) => {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [rowData, setRowData] = useState(initialData || {});

  const onAddClick = () => {
    setIsOpenEdit(true);
    setRowData(initialData || {});
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

  const onChangeSearch = async (s) => {
    _search = s;
    await onGet(_filter, _sort, _page, s);
  };

  const onChangeGrid = async (f, s, p) => {
    _filter = f;
    _sort = s;
    _page = p;
    await onGet(f, s, p, _search);
  };

  const onCloseDelete = () => {
    setIsOpenDelete(false);
  };

  const onConfirmDelete = async () => {
    await onDelete(rowData._id);
    await onGet(_filter, _sort, _page, _search);
    setIsOpenDelete(false);
  };

  const onSubmit = async (d, { setSubmitting }) => {
    if (d._id) {
      await onEdit(d);
    } else {
      await onAdd(d);
    }

    await onGet(_filter, _sort, _page, _search);
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
        <DataToolbar
          onAdd={onAddClick}
          disabled={isDisabled && isDisabled(null)}
          onChange={onChangeSearch}
          searchbar={searchbar}
        />
        <Box sx={{ pt: 3 }}>
          <DataGrid
            onChange={onChangeGrid}
            columns={columns}
            data={data}
            total={total}
            onEdit={onEditClick}
            onDelete={onDeleteClick}
            isDisabled={isDisabled}
          />
        </Box>
      </Container>
      <DataDetail isOpen={isOpenEdit} onClose={onCloseEdit}>
        <Form
          columns={columns}
          initialData={rowData}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
          disabled={isDisabled && isDisabled(rowData)}
          onCancel={onCloseEdit}
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
