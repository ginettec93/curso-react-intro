import './task-counter.css';


function TaskItem(props) {
    return(
    <li>
        <span className={`text_list ${props.completed} && text_list_completed`}>
            <button className={`verified_button ${props.completedTask} && verified_button_completed`}>V{props.completedTask}</button>{props.text}<button className="exit_button">X</button> 
        </span>      
    </li>
    );
}

export { TaskItem } ;