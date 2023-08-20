import React from 'react';
import './KanbanCard.css';

function KanbanCard({ ticket }) {
  return (
    <div className="kanban-card">
      <p>{ticket.title}</p>
    </div>
  );
}

export default KanbanCard;
