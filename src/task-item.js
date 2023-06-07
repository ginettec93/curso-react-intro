import './task-counter.css';


function TaskItem(props) {
    return(
    <li className="TaskItem">
    <span className={`Icon Icon_check ${props.completed && "Icon_check_active"}`} onClick={props.onComplete}>✓</span> 
    <p className={`Text_list ${props.completed && "Text_list_completed"}`}>{props.text}</p>
    <span className= "Icon Icon_delete" onClick={props.onDelete}>X</span>       
    </li>
    );
}

export { TaskItem } ;