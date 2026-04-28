// STATE MANAGER COMPONENT 
import { useState } from "react"
import type { Task, TaskFormData, Status, FilterOptions, SortOption } from "../../types"
import TaskForm from "../TaskForm/TaskForm";
import TaskList from "../TaskList/TaskList";
import TaskFilter from "../TaskFilter/TaskFilter";

import { filterTasks, sortTasks } from "../../utils/taskUtils";

function Dashboard() {
    // STATES TO MANAGE
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filters, setFilters] = useState<FilterOptions>({});
    const [sortBy, setSortBy] = useState<SortOption>("date");
    // const [theme, setTheme] = useState<"light" | "dark">("dark");


    // FUNCTION TO HANDLE ADDING TASK
    const handleAddTask = (data: TaskFormData) => {
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: data.title,
            description: data.description,
            priority: data.priority,
            dueDate: data.dueDate,
            status: "todo",
        };

        // TAKE PREVIOUS TASKS ADDED IN ARRAY AND ADD NEW TASK TO THE ARRAY
        setTasks((prev) => [...prev, newTask]);
    }

    // FUNCTION TO HANDLE STATUS CHANGE
    const handleStatusChange = (id: string, status: Status) => {
        setTasks((prev) =>
            prev.map((task) =>
                task.id === id ? { ...task, status } : task
            )
        );
    };

    return (

    )

}

export default Dashboard;