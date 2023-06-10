import React from 'react';
import { taskContext } from '../tasks-context/context';
import './task-counter.css';

function TaskCounter() {
    const {
        completedTasks, 
        totalTasks,
    } = React.useContext(taskContext)
    return(
        <h1>
            Task Machine<br/>
            You've completed <span>{completedTasks}</span> of <span>{totalTasks}</span> tasks!
        </h1>
    );
}

export {TaskCounter} ;