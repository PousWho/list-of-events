// src/components/EventForm.tsx
import React, { useEffect, useState } from "react";
import { Event } from "../App";

type Props = {
  onAdd: (event: Omit<Event, "id">) => void;
  onUpdate: (event: Event) => void;
  editingEvent: Event | null;
};

export const EventForm: React.FC<Props> = ({ onAdd, onUpdate, editingEvent }) => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    if (editingEvent) {
      setTitle(editingEvent.title);
      setDate(editingEvent.date);
    }
  }, [editingEvent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim() || !date) {
      alert("Заполни оба поля, Друг!");
      return;
    }

    if (editingEvent) {
      onUpdate({ ...editingEvent, title, date });
    } else {
      onAdd({ title, date });
    }

    setTitle("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Название"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
      <button type="submit">
        {editingEvent ? "Редактировать" : "Добавить"}
      </button>
    </form>
  );
};
