import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import DataWrapper from '../components/data/DataWrapper';
import { useData } from 'src/contexts/data';

const getColumns = (types) => [
  {
    field: 'images',
    headerName: 'Images',
    type: 'file'
  },
  {
    field: 'title',
    headerName: 'Title',
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
    field: 'content',
    headerName: 'Content',
    type: 'text',
    hide: true
  },
  {
    field: 'disabled',
    headerName: 'Disabled',
    type: 'boolean',
    width: 110
  },
  { field: '_id', headerName: 'ID', width: 200, disabled: true }
];

const CustomerList = () => {
  const { enums, getEnums, posts, getPosts, addPost, editPost, deletePost, addFile, deleteFile, getFile } =
    useData();

  useEffect(() => {
    const filters = [{ field: 'type', value: 1 }];
    getEnums(filters);
  }, []);

  const onDelete = async (id) => {
    await deletePost(id);

    const d = posts.data.find(p => p._id === id);
    if(d.images) {
      d.images.map(async i => await deleteFile(i));
    }
  }

  const columns = getColumns(enums.data);
  return (
    <>
      <Helmet>
        <title>Posts | EXTROPY</title>
      </Helmet>
      <DataWrapper
        columns={columns}
        data={posts.data}
        total={posts.total}
        onGet={getPosts}
        onAdd={addPost}
        onEdit={editPost}
        onDelete={onDelete}
        addFile={addFile}
        deleteFile={deleteFile}
        getFile={getFile}
      />
    </>
  );
};

export default CustomerList;
