import React from "react";
import '../task-form/task-form.css';

function TaskForm() {
    return(
        <form onSubmit={(event) => {
            event.preventDefault();
        } }>
            <label>Create a New Task!</label>
            <textarea
            placeholder="Decorate Mary's cake"/>
            <div className="buttons_container">
            <button type="submit" className="create_task_button">Create</button>
            <button className="cancel_task_button">Cancel</button> 
            </div>           
        </form>
    );
}

export { TaskForm };