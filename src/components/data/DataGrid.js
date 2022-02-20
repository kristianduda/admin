import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { getFilter} from '../../utils/filters';

export default function DataGridDemo({ onChange, columns, data, total, onEdit }) {
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
      await onChange(filter, sort, p);

      if (!active) {
        return;
      }

      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page, pageSize, sortModel, filterModel]);

  const c = [...columns,
    {
      field: 'actions',
      type: 'actions',
      getActions: (params) => [
        <GridActionsCellItem label="Edit" showInMenu onClick={e => onEdit(params.row)} />,
      ]
    }
  ]

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        columns={c}
        rowsPerPageOptions={[5, 10]}
        rowCount={total}
        pageSize={pageSize}
        page={page}
        loading={loading}
        paginationMode="server"
        onPageChange={setPage}
        onPageSizeChange={setPageSize}
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={setSortModel}
        filterMode="server"
        filterModel={filterModel}
        onFilterModelChange={setFilterModel}
      />
    </div>
  );
}
