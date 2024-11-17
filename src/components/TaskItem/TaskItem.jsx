import "./TaskItem.css";

function TaskItem({ task, onDelete, onToggleCompletion }) {
    const handleDelete = () => {
        onDelete(task.id);
    }

    const handleClick = () => {
        onToggleCompletion(task.id);
    }

    return (
        <div className="task-item">
            <span
                className={`task-text ${task.completed ? 'completed' : ''}`}
                onClick={handleClick}>
                    {task.text}
            </span>
            <button className="delete" onClick={handleDelete}>Delete</button>
        </div>
    )
}

export default TaskItem;