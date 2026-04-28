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
    const [editTask, setEditTask] = useState<Task | null>(null); // SET EDIT STATE NULL 
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

    // FUNCTION TO HANDLE UPDATING A TASK
    const handleUpdateTask = (id: string, data: TaskFormData) => {
        setTasks(prev => 
            prev.map(task => 
                task.id === id
                ? {...task, ...data}
                : task
            )
        )
        setEditTask(null); // EXIT EDIT MODE SET BACK TO INITIAL VALUE
    }

    // FUNCTION TO HANDLE EDIT TRIGGER
    const handleEdit = (task: Task) => {
        setEditTask(task)
    }

    // FUNCTION TO HANDLE DELETING A TASK
    const handleDelete = (id: string) => {
        setTasks((prev) => prev.filter(task => task.id !== id));
    };

    // APPLY FILTER THEN SORT
    const filtered = filterTasks(tasks, filters);
    const sorted = sortTasks(filtered, sortBy);

    return (
        <div className="container">
            <h1>Task Dashboard</h1>

            <TaskForm 
            onAddTask={handleAddTask}
            onUpdateTask={handleUpdateTask}
            editingTask={editTask}
             />

            <TaskFilter 
            filters={filters}
            sortBy={sortBy}
            onFilterChange={setFilters}
            onSortChange={setSortBy} />

            <TaskList
            tasks={sorted}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
            onEdit={handleEdit} />
        </div>
    );
}

export default Dashboard;