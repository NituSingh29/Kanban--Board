import React from 'react';
import KanbanBoard from './KanbanBoard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kanban Board App</h1>
      </header>
      <main className="App-main">
        <KanbanBoard />
      </main>
    </div>
  );
}

export default App;