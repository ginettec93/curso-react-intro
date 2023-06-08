import './task-counter.css';

function TaskCounter({total, completed}) {
    return(
        <h1>
            You've completed <span>{completed}</span> of <span>{total}</span> tasks!
        </h1>
    );
}

export {TaskCounter} ;