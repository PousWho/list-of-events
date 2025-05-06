import React, { useState } from "react";
import { EventForm } from "./components/EventForm";
import { EventList } from "./components/EventList";
import './styles.css';

export type Event = {
  id: number;
  title: string;
  date: string;
};

const App: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);

  const addEvent = (event: Omit<Event, "id">) => {
    const newEvent = { ...event, id: Date.now() };
    setEvents(prev => [...prev, newEvent]);
  };

  const updateEvent = (updated: Event) => {
    setEvents(prev =>
      prev.map(ev => (ev.id === updated.id ? updated : ev))
    );
    setEditingEvent(null);
  };

  const deleteEvent = (id: number) => {
    setEvents(prev => prev.filter(ev => ev.id !== id));
  };

  const editEvent = (event: Event) => {
    setEditingEvent(event);
  };

  return (
    <div id="app-container">
      <h1>Список мероприятий</h1>
      <EventForm
        onAdd={addEvent}
        onUpdate={updateEvent}
        editingEvent={editingEvent}
      />
      <EventList
        events={events}
        onDelete={deleteEvent}
        onEdit={editEvent}
      />
    </div>
  );
};

export default App;
