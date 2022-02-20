import { Helmet } from 'react-helmet';
import DataWrapper from '../components/data/DataWrapper';
import { useData } from 'src/contexts/data';

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true
  },
  // {
  //   field: 'key',
  //   headerName: 'Key',
  //   type: 'number',
  //   width: 110,
  //   editable: true
  // },
  {
    field: 'key',
    headerName: 'Select',
    type: 'singleSelect',
    valueOptions: [{ value: 10, label: 'A' }, { value: 20, label: 'B' }],
    valueFormatter: (params) => {
      const v = [{ value: 10, label: 'A' }, { value: 20, label: 'B' }].find(x => x.value === params.value);
      return v ? v.label : '';
    },
  },
  {
    field: 'disabled',
    headerName: 'Disabled',
    type: 'boolean',
    width: 110,
    editable: true
  },
  { field: '_id', headerName: 'ID', width: 200 },
];

const CustomerList = () => {
  const { enums, getEnums } = useData();


  return (
    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <DataWrapper 
        columns={columns}
        data={enums.data}
        total={enums.total}
        onChange={getEnums}
      />
    </>
  );
};

export default CustomerList;
