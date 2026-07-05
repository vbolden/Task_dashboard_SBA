import type { Status, TaskItemProps } from "../../types";
import { FaEdit, FaTrash, FaCalendarAlt } from "react-icons/fa";

function TaskItem({ task, onStatusChange, onDelete, onEdit }: TaskItemProps) {
    return (
        <article className="task-card">
            <div className="task-header">
                <h3>{task.title}</h3>
                <span className={`priority ${task.priority}`}>
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}
                </span>
            </div>

            <p className="task-description">
                {task.description}
            </p>

            <div className="task-meta">
                <span className="due-date">
                    <FaCalendarAlt />
                    {task.dueDate || "No due date"}
                </span>
            </div>

            <select
                className="status-select"
                value={task.status}
                onChange={(e) =>
                    onStatusChange(task.id, e.target.value as Status)
                }
            >
                <option value="todo">Todo</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>

            <div className="task-footer">
                <button className="edit-btn" onClick={() => onEdit(task)}>
                    <FaEdit />
                    Edit
                </button>
                <button className="delete-btn" onClick={() => onDelete(task.id)}>
                    <FaTrash />
                    Delete
                </button>
            </div>
        </article>
    );
}

export default TaskItem;