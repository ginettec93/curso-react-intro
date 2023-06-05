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
  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;
 
  const completeTask = (text) => {
    const newTasks = [...tasks];
    const tasksIndex = newTasks.findIndex(
      (task) => task.text == text
    );
    newTasks[tasksIndex].completed = true;
    setTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const tasksIndex = newTasks.findIndex(
      (task) => task.text == text
    );
    newTasks.splice(tasksIndex, 1);
    setTasks(newTasks);
  };
  
  return (
    <>

      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList>
          {defaultTask.map(task => (<TaskItem 
          key={task.text} 
          text={task.text}
          completed={task.completed}
          onComplete={ () => completeTask(task.text)}
          onDelete={ () => deleteTask(task.text)} />
          ))} 
          
      </TaskList>
      
      <CreateTaskButton/>
    
    </>
  );
}

export default App;
