import TaskItem from "../TaskItem/TaskItem";
import "./TasksList.css";

function TasksList({ tasks, onDelete, onToggleCompletion }) {
    return (
        <div class="tasks-list">
            {tasks.map((task) =>
                <TaskItem
                task={task}
                key={task.id}
                onDelete={onDelete}
                onToggleCompletion={onToggleCompletion}/>
            )}
        </div>
    );
}

export default TasksList;