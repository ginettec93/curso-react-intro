import './task-counter.css';


function TaskItem(props) {
    return(
    <li>
        <span className={`text_list ${props.completed} && text_list_completed`}>
            <button className={`verified_button ${props.completedTask} && verified_button_completed
             `} onClick ={props.onComplete} >V{props.completedTask}</button>{props.text}<button className="exit_button" onClick={props.onDelete}>X</button> 
        </span>      
    </li>
    );
}

export { TaskItem } ;