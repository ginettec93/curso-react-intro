import './task-counter.css';

function TaskItem(props) {
    return(
    <li>
        <span class="text_list">
            <button class="verified_button">V{props.completed}</button>{props.text}<button class="exit_button">X</button> 
        </span>      
    </li>
    );
}

export { TaskItem } ;