import logo from './platzi.webp';
import './App.css';
import { TaskCounter} from './task-counter';
import { TaskSearch } from './task-search';
import { TaskList } from './task-list';

function App() {
  return (
    <div className="App">

      <TaskCounter/>
      <TaskSearch/>

      <TaskList>
          <TaskItem/> 
          <TaskItem/> 
          <TaskItem/> 
          <TaskItem/> 
          <TaskItem/> 
          <TaskItem/> 
      </TaskList>
      
      <CreateTaskButton/>
    </div>
  );
}

function TaskItem() {
  return(
    <li>
      <span>V</span>
      <p>Study History</p>
      <span>X</span>   
    </li>

  );
}

export default App;
