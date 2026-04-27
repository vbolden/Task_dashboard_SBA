import type { TaskListProps } from "../../types";
import TaskItem from "./TaskItem";

function TaskList({tasks, onStatusChange, onDelete}: TaskListProps) {
    // UI IF THERE ARE NO TASKS IN LIST
    if(tasks.length === 0) {
        return <p>No Tasks Found.</p>
    }

    return (
        <div>
            {tasks.map(task => (
                <TaskItem 
                key={task.id}
                task={task}
                onStatusChange={onStatusChange}
                onDelete={onDelete}/>
            ))}
        </div>
    );
}

export default TaskList;