import { TaskCounter} from './task-counter';
import { TaskSearch } from './task-search';
import { TaskList } from './task-list';
import { TaskItem } from './task-item';
import { CreateTaskButton } from './task-button';
import React, { useState } from 'react';

 // const defaultTask = [
  //{text:'Study Biology', completed: false},
 // {text:'Study Geometry', completed: true},
  //{text:'Study Anatomy', completed: false},
//  {text:'Study History', completed: false},
 // {text:'Study Psychology', completed: true},
//]; 

// localStorage.setItem('Tasks_V1', defautlTask);
// localStorage.removeItem('Tasks_V1');

function App() {

  const localStorageTasks = localStorage.getItem('Tasks_V1');

  let parsedTasks = JSON.parse(localStorageTasks);

  const [tasks, setTasks] = React.useState(parsedTasks);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTasks = tasks.filter(tasks => !!tasks.completed).length;
  const totalTasks = tasks.length;
  const searchedTasks=tasks.filter((tasks)=>{const tasksText=tasks.text.toLowerCase();
    const searchText=searchValue.toLowerCase();return tasksText.includes(searchText);});
  
    const completeTask = (text) => {
    const newTasks = [...tasks];
    const tasksIndex = newTasks.findIndex(
      (tasks) => tasks.text == text
    );
    newTasks[tasksIndex].completed = true;
    setTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const tasksIndex = newTasks.findIndex(
      (tasks) => tasks.text == text
    );
    newTasks.splice(tasksIndex, 1);
    setTasks(newTasks);
  };
  
  return (
    <>

      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList>
          {searchedTasks.map(tasks => (<TaskItem 
          key={tasks.text} 
          text={tasks.text}
          completed={tasks.completed}
          onComplete={ () => completeTask(tasks.text)}
          onDelete={ () => deleteTask(tasks.text)} />
          ))} 
          
      </TaskList>
      
      <CreateTaskButton/>
    
    </>
  );
}

export default App;
