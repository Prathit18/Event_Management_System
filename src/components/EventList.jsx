import React from 'react';
import EventItem from './EventItem';

function EventList({ events, onEdit, onDelete }) {
  return (
    <div className="event-list">
      <h2>Scheduled Events</h2>
      {events.map(event => (
        <EventItem key={event.id} event={event} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default EventList;
