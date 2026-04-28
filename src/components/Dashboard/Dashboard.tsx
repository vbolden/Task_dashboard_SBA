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
    const [sortBy, setSortBy] = useState<SortOption>("");
    // const [theme, setTheme] = useState<"light" | "dark">("dark");

    return (

)

}

export default Dashboard;