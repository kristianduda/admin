import * as React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import { getFilter } from '../../utils/filters';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DataGridDemo({
  onGet,
  columns,
  data,
  total,
  onEdit,
  onDelete,
  disabled
}) {
  const [pageModel, setPageModel] = React.useState(0);
  const [pageSizeModel, setPageSizeModel] = React.useState(5);
  const [loading, setLoading] = React.useState(false);

  const [sortModel, setSortModel] = React.useState([
    { field: 'id', sort: 'asc' }
  ]);
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    linkOperator: 'and'
  });

  const onFilterModelChange = (f) => {
    setFilterModel(f);
    onChange(pageModel, pageSizeModel, f, sortModel);
  };

  const onSortModelChange = (s) => {
    setSortModel(s);
    onChange(pageModel, pageSizeModel, filterModel, s);
  };

  const onPageModelChange = (p) => {
    setPageModel(p);
    onChange(p, pageSizeModel, filterModel, sortModel);
  };

  const onPageSizeModelChange = (ps) => {
    setPageSizeModel(ps);
    onChange(pageModel, ps, filterModel, sortModel);
  };

  const onChange = async (p, ps, f, s) => {
    setLoading(true);
    const page = { limit: ps, skip: p * ps };
    const filter = f.items.map((x) =>
      getFilter(x.columnField, x.operatorValue, x.value)
    );
    const sort =
      s && s.length > 0 ? { field: s[0].field, dir: s[0].sort } : undefined;
    await onGet(filter, sort, page);
    setLoading(false);
  };

  React.useEffect(() => {
    onChange(pageModel, pageSizeModel, filterModel, sortModel);
  }, []);

  const columnsWithActions = columns.map((c) => {
    if (c.type === 'singleSelect') {
      c.valueFormatter = (params) => {
        const v = c.valueOptions.find((x) => x.value === params.value);
        return v ? v.label : '';
      };
    }

    return c;
  });
  columnsWithActions.push({
    field: 'actions',
    type: 'actions',
    getActions: (params) => [
      <GridActionsCellItem
        label="Edit"
        icon={<EditIcon />}
        onClick={(e) => onEdit(params.row)}
      />,
      <GridActionsCellItem
        label="Delete"
        icon={<DeleteIcon />}
        disabled={disabled}
        onClick={(e) => onDelete(params.row)}
      />
    ]
  });

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        getRowId={(row) => row._id}
        rows={data}
        columns={columnsWithActions}
        rowsPerPageOptions={[5, 10]}
        rowCount={total}
        pageSize={pageSizeModel}
        page={pageModel}
        loading={loading}
        paginationMode="server"
        onPageChange={onPageModelChange}
        onPageSizeChange={onPageSizeModelChange}
        sortingMode="server"
        sortModel={sortModel}
        onSortModelChange={onSortModelChange}
        filterMode="server"
        filterModel={filterModel}
        onFilterModelChange={onFilterModelChange}
      />
    </div>
  );
}
