// src/components/EventList.tsx
import React from "react";
import { Event } from "../App";

type Props = {
  events: Event[];
  onDelete: (id: number) => void;
  onEdit: (event: Event) => void;
};

export const EventList: React.FC<Props> = ({ events, onDelete, onEdit }) => {
  if (events.length === 0) {
    return <p>Нет мероприятий. Добавь что-нибудь!</p>;
  }

  return (
    <ul>
      {events.map(event => (
        <li key={event.id} style={{ marginBottom: "0.5rem" }}>
          <strong>{event.title}</strong> — {event.date}
          <button onClick={() => onEdit(event)} style={{ marginLeft: "0.5rem" }}>
            Редактировать
          </button>
          <button onClick={() => onDelete(event.id)} style={{ marginLeft: "0.5rem" }}>
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
};
