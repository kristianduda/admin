import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DataWrapper from '../components/data/DataWrapper';
import { useData } from 'src/contexts/data';
import Calendar from 'src/components/calendar/Calendar';

const types = [
  {
    label: 'blog',
    value: 1
  },
  {
    label: 'event',
    value: 2
  }
]

const columns = [
  {
    field: 'label',
    headerName: 'Label',
    flex: 1,
    minWidth: 200
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'singleSelect',
    valueOptions: types,
    sortable: false
  },
  {
    field: 'value',
    headerName: 'Value',
    type: 'number',
    width: 110,
  },
  {
    field: 'disabled',
    headerName: 'Disabled',
    type: 'boolean',
    width: 110,
  },
  { field: '_id', headerName: 'ID', width: 200, disabled: true },
];

const CustomerList = () => {
  const { enums, getEnums, addEnum, editEnum, deleteEnum } = useData();

  return (
    <>
      <Helmet>
        <title>Enums | EXTROPY</title>
      </Helmet>
      <Calendar />
      {/* <DataWrapper 
        columns={columns}
        data={enums.data}
        total={enums.total}
        onGet={getEnums}
        onAdd={addEnum}
        onEdit={editEnum}
        onDelete={deleteEnum}
      /> */}
    </>
  );
};

export default CustomerList;
