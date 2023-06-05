import { TaskCounter} from './task-counter';
import { TaskSearch } from './task-search';
import { TaskList } from './task-list';
import { TaskItem } from './task-item';
import { CreateTaskButton } from './task-button';
import React, { useState } from 'react';

const defaultTask = [
  {text:'Study Biology', completed: false},
  {text:'Study Geometry', completed: true},
  {text:'Study Anatomy', completed: false},
  {text:'Study History', completed: false},
  {text:'Study Psychology', completed: true}
];

function App() {
  const [tasks, setTasks] = React.useState(defaultTask);
  const [searchValue, setSearchValue] = React.useState('');
  console.log('Users are looking for ' + searchValue);

  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;
  
  return (
    <>

      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList>
          {defaultTask.map(task => (<TaskItem 
          key={task.text} 
          text={task.text}
          completed={task.completed} />
          ))} 
      </TaskList>
      
      <CreateTaskButton/>
    
    </>
  );
}

export default App;
