import React from 'react';
import { TaskProvider } from '../tasks-context/context';
import { AppUI } from '../app-task-machine/AppUI';

function App() {
  return (
    <TaskProvider>
    <AppUI/>
  </TaskProvider>
  );
};
  
export default App;
