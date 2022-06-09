import * as React from 'react';
import { DataGrid, GridActionsCellItem, GridToolbar } from '@mui/x-data-grid';
import { getFilter } from '../../utils/filters';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

export default function DataGridDemo({
  onChange,
  columns,
  data,
  total,
  onEdit,
  onDelete,
  isDisabled
}) {
  const [pageModel, setPageModel] = React.useState(0);
  const [pageSizeModel, setPageSizeModel] = React.useState(5);
  const [loading, setLoading] = React.useState(false);

  const [sortModel, setSortModel] = React.useState([
    { field: '_id', sort: 'asc' }
  ]);
  const [filterModel, setFilterModel] = React.useState({
    items: [],
    linkOperator: 'and'
  });

  const onFilterModelChange = (f) => {
    setFilterModel(f);
    handleChange(pageModel, pageSizeModel, f, sortModel);
  };

  const onSortModelChange = (s) => {
    setSortModel(s);
    handleChange(pageModel, pageSizeModel, filterModel, s);
  };

  const onPageModelChange = (p) => {
    setPageModel(p);
    handleChange(p, pageSizeModel, filterModel, sortModel);
  };

  const onPageSizeModelChange = (ps) => {
    setPageSizeModel(ps);
    handleChange(pageModel, ps, filterModel, sortModel);
  };

  const handleChange = async (p, ps, f, s) => {
    setLoading(true);
    const page = { limit: ps, skip: p * ps };
    const filter = f.items.map((x) =>
      getFilter(x.columnField, x.operatorValue, x.value)
    );
    const sort =
      s && s.length > 0 ? { field: s[0].field, dir: s[0].sort } : undefined;
    await onChange(filter, sort, page);
    setLoading(false);
  };

  React.useEffect(() => {
    handleChange(pageModel, pageSizeModel, filterModel, sortModel);
  }, []);

  const columnsWithActions = [];
  columns.forEach((c) => {
    switch (c.type) {
      case 'singleSelect':
        columnsWithActions.push({
          ...c,
          valueGetter: ({ value }) => {
            const v = c.valueOptions.find((x) => x.value === value);
            return v ? v.label : '';
          }
        });
        break;
      case 'dateTime':
        columnsWithActions.push({
          ...c,
          valueGetter: ({ value }) => value && new Date(value)
        });
        break;
      case 'text':
      case 'file':
        break;
      default:
        columnsWithActions.push(c);
    }
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
        disabled={isDisabled && isDisabled(params.row)}
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
        components={{
          Toolbar: GridToolbar
        }}
      />
    </div>
  );
}
