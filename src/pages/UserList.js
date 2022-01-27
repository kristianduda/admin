import { Helmet } from 'react-helmet';
import { Box, Container } from '@mui/material';
// import CustomerListResults from '../components/customer/CustomerListResults';
// import CustomerListToolbar from '../components/customer/CustomerListToolbar';
// import customers from '../__mocks__/customers';
import DataGrid from '../components/data/DataGrid';
import { useData } from 'src/contexts/data';

const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
    editable: true
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
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params) =>
  //     `${params.row.firstName || ''} ${params.row.lastName || ''}`
  // }
];

const CustomerList = () => {
  const { enums, getEnums } = useData();

  return (
    <>
      <Helmet>
        <title>Customers | Material Kit</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          minHeight: '100%',
          py: 3
        }}
      >
        <Container maxWidth={false}>
          {/* <CustomerListToolbar /> */}
          <Box sx={{ pt: 3 }}>
            {/* <CustomerListResults customers={customers} /> */}
            <DataGrid 
              onChange={getEnums}
              columns={columns}
              data={enums.data}
              total={enums.total}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default CustomerList;
