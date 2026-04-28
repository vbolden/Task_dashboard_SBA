import type { Status, TaskItemProps } from "../../types";

function TaskItem({task, onStatusChange, onDelete, onEdit}: TaskItemProps) {
    return (
        <div>
            <h3>{task.title}</h3>
            <p>{task.description}</p>

            <p>Priority: {task.priority}</p>

            <select 
            value={task.status}
            onChange={(e) => 
                onStatusChange(task.id, e.target.value as Status)
            }
            >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            <button
            onClick={() => onEdit(task)}>
                Edit</button>

            <button
            onClick={() => onDelete(task.id)}
            >
                Delete
            </button>
        </div>
    );
}

export default TaskItem;