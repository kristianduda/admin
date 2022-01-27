import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getFilter} from '../../utils/filters';

const columns = [
  { field: 'id', headerName: 'ID', type: 'number', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 }
];

export default function DataGridDemo() {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(5);
  const [loading, setLoading] = React.useState(false);

  const [sortModel, setSortModel] = React.useState([
    { field: 'id', sort: 'asc' }
  ]);
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    linkOperator: 'and'
  });

  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      //   const newRows = await loadServerRows(
      //     rowsState.page,
      //     rowsState.pageSize,
      //     data.rows,
      //   );
      //   console.log(filterModel);
      const p = { limit: pageSize, skip: page * pageSize }
      const filter = filterModel.items.map((x) => getFilter(x.columnField, x.operatorValue, x.value));
      const sort = sortModel && sortModel.length > 0 ? { field: sortModel[0].field, dir: sortModel[0].sort } : undefined;

      if (!active) {
        return;
      }

      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page, pageSize, sortModel, filterModel]);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        rowsPerPageOptions={[5, 10]}
        rowCount={rows.length}
        pageSize={pageSize}
        page={page}
        loading={loading}
        // paginationMode="server"
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
        // sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={setSortModel}
        // filterMode="server"
        filterModel={filterModel}
        onFilterModelChange={setFilterModel}
      />
    </div>
  );
}
