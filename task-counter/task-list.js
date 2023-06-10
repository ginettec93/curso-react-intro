import './task-counter.css';

function TaskList({children}) {
    return(
        <ul className="Task_list">
            {children}
        </ul>
    );
}

export {TaskList} ;