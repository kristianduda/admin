import { Helmet } from 'react-helmet';
import DataWrapper from '../components/data/DataWrapper';
import { useData } from 'src/contexts/data';

const enumTypes = [
  { value: 1, label: 'blog' },
  { value: 3, label: 'partner' },
  { value: 5, label: 'country' },
  { value: 200, label: 'shop' },
  { value: 201, label: 'size' },
  { value: 202, label: 'sex' },
  { value: 203, label: 'size_socks' }
];

const productCategory = [
  { value: 1, label: 'Torty' },
  { value: 3, label: 'Koláče' },
  { value: 5, label: 'Špeciality' }
];

const columns = [
  {
    field: 'category',
    headerName: 'Kategória produktu',
    width: 150,
    type: 'singleSelect',
    valueOptions: productCategory
  },
  {
    field: 'name',
    headerName: 'Názov produktu',
    width: 150
  },
  // {
  //   field: 'enumTypeId',
  //   headerName: 'Type',
  //   type: 'singleSelect',
  //   valueOptions: enumTypes,
  //   sortable: false
  // },
  {
    field: 'flavour',
    headerName: 'Príchuť'
  },
  {
    field: 'shape',
    headerName: 'Má produkt tvar?',
    type: 'boolean',
    width: 110
  },
  // {
  //   field: 'key',
  //   headerName: 'Key',
  //   type: 'number',
  //   width: 110
  // },
  {
    field: 'weight',
    headerName: 'Hmotnosť',
    type: 'number'
  },
  {
    field: 'deliveryTime',
    headerName: 'Čas dodania',
    type: 'number',
    placeholder: 'Zadajte počet dní',
    width: 150
  },
  {
    field: 'price',
    headerName: 'Cena',
    type: 'number'
  },
  {
    field: 'composition',
    headerName: 'Zloženie',
    placeholder: 'Zadajte vždy len jednu surovinu a pridajte'
  }
  // { field: '_id', headerName: 'ID', width: 200 }
];

const ProductsList = () => {
  const { enums, getEnums, addEnum, editEnum, deleteEnum } = useData();

  return (
    <>
      <Helmet>
        <title>Produkty | Cukro</title>
      </Helmet>
      <DataWrapper
        columns={columns}
        data={enums.data}
        total={enums.total}
        onGet={getEnums}
        onAdd={addEnum}
        onEdit={editEnum}
        onDelete={deleteEnum}
      />
    </>
  );
};

export default ProductsList;
