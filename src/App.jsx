import React, { useState } from 'react';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import './styles.css';

function App() {
  const [events, setEvents] = useState([]);
  const [editingEvent, setEditingEvent] = useState(null);

  const addOrUpdateEvent = (event) => {
    if (editingEvent) {
      setEvents(events.map(e => e.id === editingEvent.id ? event : e));
      setEditingEvent(null);
    } else {
      setEvents([...events, { ...event, id: Date.now() }]);
    }
  };

  const editEvent = (id) => {
    const event = events.find(e => e.id === id);
    setEditingEvent(event);
  };

  const deleteEvent = (id) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <div className="container">
      <header>
        <h1>Event Management Dashboard</h1>
      </header>
      <EventForm addOrUpdateEvent={addOrUpdateEvent} editingEvent={editingEvent} />
      <EventList events={events} onEdit={editEvent} onDelete={deleteEvent} />
    </div>
  );
}

export default App;
