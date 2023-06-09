import './task-counter.css';

function CreateTaskButton({setOpenModal}) {
    return (
        <button className="Add_button"
        onClick = {
            () => {
                setOpenModal(state => !state);
            }
        }
        >+</button>
    );
}
export { CreateTaskButton };