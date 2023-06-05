import './task-counter.css';
import React, { useState } from 'react';

function TaskCounter({totalTasks, completedTasks}) {
    return(
        <h1>
            You've completed {completedTasks} of {totalTasks} tasks!
        </h1>
    );
}

export {TaskCounter} ;