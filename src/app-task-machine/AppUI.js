import React from "react";
import { TaskCounter} from '../task-counter/task-counter';
import { TaskSearch } from '../task-counter/task-search';
import { TaskList } from '../task-counter/task-list';
import { TaskItem } from '../task-counter/task-item';
import { TasksLoading} from '../loading-tasks/loading-tasks';
import { TasksError } from '../error-tasks/tasks-error';
import { EmptyTasks } from '../empty-tasks/empty-tasks';
import { CreateTaskButton } from '../task-counter/task-button';
import { taskContext } from "../tasks-context/context";

function AppUI() {
    const {loading, 
        error,
        searchedTasks,
        completeTask,
        deleteTask,} = React.useContext(taskContext);

        return (
    <>   
        <TaskCounter/>
         <TaskSearch />

        <TaskList>
            {loading && <TasksLoading/>}
            {error && <TasksError/>}
            {(!loading && searchedTasks.length === 0) && <EmptyTasks/>}
              
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
    </>);
}
export { AppUI };