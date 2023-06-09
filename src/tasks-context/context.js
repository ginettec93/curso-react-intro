import React from 'react';
import {useLocalStorage} from '../app-task-machine/local-storage';

const taskContext = React.createContext();

function TaskProvider ({children}) {
    const  {
        item: tasks, 
        saveItem: saveTasks, 
        loading, 
        error,
      } = useLocalStorage('Tasks_V1', []);
      const [searchValue, setSearchValue] = React.useState('');
      const [openModal, setOpenModal] = React.useState(true);
      
      const completedTasks = tasks.filter(task => !!task.completed).length;
      const totalTasks = tasks.length;
      
      const searchedTasks = tasks.filter((task)=>{
        const taskText = task.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return taskText.includes(searchText);});
    
        const completeTask = (text) => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex(
          (task) => task.text === text
        );
        newTasks[taskIndex].completed = true;
        saveTasks(newTasks);
      };
    
      const deleteTask = (text) => {
        const newTasks = [...tasks];
        const taskIndex = newTasks.findIndex(
          (task) => task.text === text
        );
        newTasks.splice(taskIndex, 1);
        saveTasks(newTasks);
      };
      
      return (

        <taskContext.Provider value={{ 
            loading, 
            error,
            completedTasks,
            totalTasks,
            searchValue,
            setSearchValue,
            searchedTasks,
            completeTask,
            deleteTask,
            openModal,
            setOpenModal,
          }}>
            {children}
          </taskContext.Provider> );
    }

export {taskContext, TaskProvider};


