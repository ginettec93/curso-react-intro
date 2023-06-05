import './task-counter.css';

function TaskCounter({total, completed}) {
    return(
        <h1>
            You've completed {completed} of {total} tasks!
        </h1>
    );
}

export {TaskCounter} ;