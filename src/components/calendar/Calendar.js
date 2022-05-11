import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { INITIAL_EVENTS, createEventId } from './event-utils';
import { useTheme } from '@mui/styles';

import './Calendar.css';

const handleEvents = (events) => {};

const handleEventDataTransform = (event) => {
  event.id = event._id;
  return event;
};

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

export default function Calendar({ onChange, data, onSelect, isDisabled }) {
  const theme = useTheme();

  const handleDatesSet = (args) => {
    const filters = [
      { field: 'start', op: 'gte', value: args.start },
      { field: 'end', op: 'lte', value: args.end }
    ];
    onChange(filters);
  };

  const handleDateSelect = (selectInfo) => {
    if (isDisabled && isDisabled(null)) {
      const calendarApi = selectInfo.view.calendar;
      calendarApi.unselect(); 
      return;
    }

    const event = {
      start: new Date(selectInfo.startStr),
      end: new Date(selectInfo.endStr)
    };
    onSelect(event);

    // let title = prompt('Please enter a new title for your event');
    // let calendarApi = selectInfo.view.calendar;

    // calendarApi.unselect(); // clear date selection

    // if (title) {
    //   calendarApi.addEvent({
    //     id: createEventId(),
    //     title,
    //     start: selectInfo.startStr,
    //     end: selectInfo.endStr,
    //     allDay: selectInfo.allDay
    //   });
    // }
  };

  const handleEventClick = (clickInfo) => {
    // if (
    //   confirm(
    //     `Are you sure you want to delete the event '${clickInfo.event.title}'`
    //   )
    // ) {
    //   clickInfo.event.remove();
    // }
    const event = data.find((x) => x._id === clickInfo.event.id);
    if (isDisabled && isDisabled(event)) {
      return;
    }

    onSelect(event);
  };

  return (
    <div className="Calendar">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: 'prev,next,today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        initialView="timeGridWeek"
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        weekends={true}
        events={data}
        slotDuration="1:00:00"
        select={handleDateSelect}
        eventContent={renderEventContent} // custom render function
        eventClick={handleEventClick}
        eventsSet={handleEvents} // called after events are initialized/added/changed/removed
        eventColor={theme.palette.primary.main}
        datesSet={handleDatesSet}
        eventDataTransform={handleEventDataTransform}
        /* you can update a remote database when these fire:
            eventAdd={function(){}}
            eventChange={function(){}}
            eventRemove={function(){}}
            */
      />
    </div>
  );
}
