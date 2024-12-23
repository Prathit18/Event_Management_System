import React from 'react';

function EventItem({ event, onEdit, onDelete }) {
  return (
    <div className="event">
      <p><strong>{event.name}</strong> - {event.date}</p>
      <button onClick={() => onEdit(event.id)}>Edit</button>
      <button onClick={() => onDelete(event.id)}>Delete</button>
    </div>
  );
}

export default EventItem;
