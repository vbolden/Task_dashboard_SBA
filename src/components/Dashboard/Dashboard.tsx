// STATE MANAGER COMPONENT 
import { useState } from "react"
import type { Task, TaskFilterProps } from "../../types"

// STATES TO MANAGE
const [tasks, setTasks] = useState<Task[]>([]);
const [filters, setFilters] = useState<TaskFilterProps>({});
const [theme, setTheme] = useState<"light" | "dark">("dark");

