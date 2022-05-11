import { useState } from 'react';
import Calendar from './Calendar';
import DataDetail from '../data/DataDetail';
import ConfirmDialog from '../data/ConfirmDialog';
import Form from '../data/Form';
import { Box, Container } from '@mui/material';

let _filter;
export default function CalendarWrapper({
  onGet,
  onEdit,
  onAdd,
  data,
  initialData,
  columns,
  validationSchema,
  isDisabled
}) {
  const [isOpenEdit, setIsOpenEdit] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  const [rowData, setRowData] = useState({ ...initialData });

  const onSelect = (event) => {
    setRowData({ ...initialData, ...event });
    setIsOpenEdit(true);
  };

  const onCloseEdit = () => {
    setIsOpenEdit(false);
  };

  const onChange = (filter) => {
    _filter = filter;

    onGet(filter);
  };

  const onDeleteClick = (row) => {
    setIsOpenDelete(true);
    setRowData(row);
  };

  const onSubmit = async (d, { setSubmitting }) => {
    if (d._id) {
      await onEdit(d);
    } else {
      await onAdd(d);
    }

    await onGet(_filter);
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
        <Calendar onChange={onChange} data={data} onSelect={onSelect} isDisabled={isDisabled} />
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
    </Box>
  );
}
