import type { TaskListProps } from "../../types";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onStatusChange, onDelete, onEdit }: TaskListProps) {
    // UI IF THERE ARE NO TASKS IN LIST
    if (tasks.length === 0) {
        return (
            <div className="empty-state">

                <h2>No Tasks Yet</h2>

                <p>
                    Create your first task to get started.
                </p>

            </div>
        );
    }

    return (
        <div className="task-grid">
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onStatusChange={onStatusChange}
                    onDelete={onDelete}
                    onEdit={onEdit} />
            ))}
        </div>
    );
}

export default TaskList;