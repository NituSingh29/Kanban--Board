import React from 'react';
import KanbanColumn from './KanbanColumns';
import './KanbanColumns.css';

function KanbanColumns({ groupedAndSortedTickets }) {
  const columnTitles = ['Todo', 'In progress', 'Done', 'Cancelled'];

  return (
    <div className="kanban-columns-container">
      {columnTitles.map((title) => (
        <KanbanColumn key={title} title={title} tickets={groupedAndSortedTickets[title.toLowerCase()] || []} />
      ))}
    </div>
  );
}

export default KanbanColumns;
