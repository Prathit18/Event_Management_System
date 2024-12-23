import React, { useEffect, useState } from 'react';

function EventForm({ addOrUpdateEvent, editingEvent }) {
  const [eventName, setEventName] = useState('');
  const [eventDate, setEventDate] = useState('');

  useEffect(() => {
    if (editingEvent) {
      setEventName(editingEvent.name);
      setEventDate(editingEvent.date);
    }
  }, [editingEvent]);

  const handleSubmit = () => {
    if (!eventName || !eventDate) {
      alert('Please fill out all fields.');
      return;
    }

    addOrUpdateEvent({ id: editingEvent?.id || Date.now(), name: eventName, date: eventDate });
    setEventName('');
    setEventDate('');
  };

  return (
    <div className="form-container">
      <h2>{editingEvent ? 'Update Event' : 'Add Event'}</h2>
      <label>Event Name</label>
      <input value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Enter event name" />
      <label>Event Date</label>
      <input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
      <button onClick={handleSubmit}>{editingEvent ? 'Update' : 'Add'}</button>
    </div>
  );
}

export default EventForm;
