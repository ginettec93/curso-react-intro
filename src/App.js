import logo from './platzi.webp';
import './App.css';
import { TaskCounter} from './task-counter';
import { TaskSearch } from './task-search';
import { TaskList } from './task-list';
import { TaskItem } from './task-item';
import { CreateTaskButton } from './task-button';
import React from 'react';

const defaultTask = [
  {text:'Study Biology', completed: false},
  {text:'Study Geometry', completed: true},
  {text:'Study Anatomy', completed: false},
  {text:'Study History', completed: false},
  {text:'Study Psychology', completed: true}
];

function App() {
  return (
    <React.Fragment>

      <TaskCounter completed={10} total={20} />
      <TaskSearch/>

      <TaskList>
          {defaultTask.map(task => (<TaskItem 
          key={task.text} 
          text={task.text}
          completed={task.completed} />
          ))} 
      </TaskList>
      
      <CreateTaskButton/>
    
    </React.Fragment>
  );
}

export default App;
