import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import CalendarWrapper from '../components/calendar/CalendarWrapper';
import { useData } from 'src/contexts/data';
import { useAuth } from 'src/contexts/auth';

const getColumns = (types) => [
  {
    field: 'title',
    headerName: 'Title',
    flex: 1,
    minWidth: 200
  },
  {
    field: 'start',
    headerName: 'Start',
    type: 'dateTime',
    width: 200
  },
  {
    field: 'end',
    headerName: 'End',
    type: 'dateTime',
    width: 200
  },
  {
    field: 'type',
    headerName: 'Type',
    type: 'singleSelect',
    valueOptions: types,
    sortable: false
  },
//   {
//     field: 'content',
//     headerName: 'Content',
//     hide: true
//   },
//   {
//     field: 'disabled',
//     headerName: 'Disabled',
//     type: 'boolean',
//     width: 110
//   },
  { field: '_id', headerName: 'ID', width: 200, disabled: true }
];

const today = new Date();
today.setHours(18, 0, 0, 0);

const CustomerList = () => {
  const { enums, getEnums, events, getEvents, addEvent, editEvent, deleteEvent } =
    useData();
  const { user } = useAuth();

  useEffect(() => {
    const filters = [{ field: 'type', value: 2 }];
    getEnums(filters);
  }, []);
  
  const isDisabled = (data) => {
    return data && data.userId !== user._id;
  }

  const add = (data) => {
    addEvent(data);
  }

  const columns = getColumns(enums.data);
  const initialData = {
    userId: user._id,
    start: today
  };
  return (
    <>
      <Helmet>
        <title>Events | EXTROPY</title>
      </Helmet>
      <CalendarWrapper
        columns={columns}
        data={events.data}
        total={events.total}
        onGet={getEvents}
        onAdd={add}
        onEdit={editEvent}
        onDelete={deleteEvent}
        isDisabled={isDisabled}
        initialData={initialData}
      />
    </>
  );
};

export default CustomerList;
