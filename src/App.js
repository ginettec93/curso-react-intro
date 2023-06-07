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

// localStorage.setItem('Tasks_V1', JSON.stringify(defaultTask));
// localStorage.removeItem('Tasks_V1');

function useLocalStorage(itemName, initialValue) {

  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }
  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  
  return [item, saveItem];
};

function App() {
  const [tasks, saveTasks] = useLocalStorage('Tasks_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  
  const completedTasks = tasks.filter(task => !!task.completed).length;
  const totalTasks = tasks.length;
  
  const searchedTasks = tasks.filter((task)=>{
    const taskText = task.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return taskText.includes(searchText);});

    const completeTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      (task) => task.text == text
    );
    newTasks[taskIndex].completed = true;
    saveTasks(newTasks);
  };

  const deleteTask = (text) => {
    const newTasks = [...tasks];
    const taskIndex = newTasks.findIndex(
      (task) => task.text == text
    );
    newTasks.splice(taskIndex, 1);
    saveTasks(newTasks);
  };
  
  return (
    <>

      <TaskCounter completed={completedTasks} total={totalTasks} />
      <TaskSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TaskList>
          {searchedTasks.map(tasks => (
          <TaskItem 
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
