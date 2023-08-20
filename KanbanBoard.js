import React, { useState, useEffect } from 'react';
import KanbanColumns from './KanbanColumns';
import './KanbanBoard.css';

function KanbanBoard() {
  const [tickets, setTickets] = useState([]);
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  useEffect(() => {
    fetch('https://api.quicksell.co/v1/internal/frontend-assignment')
      .then((response) => response.json())
      .then((data) => setTickets(data.tickets))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const groupAndSortTickets = (tickets, groupingOption, sortingOption) => {
    // Grouping logic
    let groupedTickets = {};
    if (groupingOption === 'status') {
      groupedTickets = tickets.reduce((groups, ticket) => {
        const status = ticket.status;
        if (!groups[status]) {
          groups[status] = [];
        }
        groups[status].push(ticket);
        return groups;
      }, {});
    } else if (groupingOption === 'user') {
      // Implement grouping by user
    } else if (groupingOption === 'priority') {
      // Implement grouping by priority
    }

    // Sorting logic
    for (const status in groupedTickets) {
      if (sortingOption === 'priority') {
        groupedTickets[status].sort((a, b) => b.priority - a.priority);
      } else if (sortingOption === 'title') {
        groupedTickets[status].sort((a, b) => a.title.localeCompare(b.title));
      }
    }

    return groupedTickets;
  };

  const groupedAndSortedTickets = groupAndSortTickets(tickets, groupingOption, sortingOption);

  return (
    <div className="kanban-board">
      <h1>Kanban Board</h1>
      <div className="controls">
        {/* Grouping and sorting controls */}
        <select value={groupingOption} onChange={(e) => setGroupingOption(e.target.value)}>
          <option value="status">By Status</option>
          <option value="user">By User</option>
          <option value="priority">By Priority</option>
        </select>
        <select value={sortingOption} onChange={(e) => setSortingOption(e.target.value)}>
          <option value="priority">Sort by Priority</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>
      <div className="kanban-columns">
        <KanbanColumns groupedAndSortedTickets={groupedAndSortedTickets} />
      </div>
    </div>
  );
}

export default KanbanBoard;
