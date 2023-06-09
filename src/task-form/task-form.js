import React from "react";
import { taskContext } from '../tasks-context/context';
import '../task-form/task-form.css';

function TaskForm() {
    const {
        addTask,
        setOpenModal,
    } = React.useContext(taskContext);

    const [newTaskValue, setNewTaskValue] = React.useState('');

    const onSubmit = (event) => { 
        event.preventDefault();
        addTask(newTaskValue);
        setOpenModal(false);
    };

    const onCancel = () => { 
        setOpenModal(false);
    };

    const onChange = (event) => { 
        setNewTaskValue(event.target.value);
    };

    return(
        <form onSubmit={onSubmit}>
            <label>Create a New Task!</label>
            <textarea
            placeholder="Decorate Mary's cake" value={newTaskValue} onChange={onChange}/>
            <div className="buttons_container">
            <button type="submit" className="create_task_button">Create</button>
            <button type="button" className="cancel_task_button" onClick={onCancel} >Cancel</button> 
            </div>           
        </form>
    );
}

export { TaskForm };