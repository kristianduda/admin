import { Helmet } from 'react-helmet';
import DataWrapper from '../components/data/DataWrapper';
import { useData } from 'src/contexts/data';

const enumTypes = [
  { value: 1, label: "blog" },
  { value: 3, label: "partner" },
  { value: 5, label: "country" },
  { value: 200, label: "shop" },
  { value: 201, label: "size" },
  { value: 202, label: "sex" },
  { value: 203, label: "size_socks" },
]

const columns = [
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true
  },
  {
    field: 'enumTypeId',
    headerName: 'Type',
    type: 'singleSelect',
    valueOptions: enumTypes,
    sortable: false
  },
  {
    field: 'key',
    headerName: 'Key',
    type: 'number',
    width: 110,
    editable: true
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
  console.log(enums)

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
