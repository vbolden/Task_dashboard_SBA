// ADD DATA LOGIC FOR FILTERING AND SEARCH
import type { Task, TaskFilterProps } from "../types";

// FUNCTION TO CHECK IF TASK STATUS, PRIORITY, OR SEARCH MATCHES SELECTED STATUS, FILTER, OR SEARCH
export function filterTasks(tasks: Task[], filters: TaskFilterProps) {
    // FIRST RETURNS FINAL FILTERED ARRAY
    // LOOP THROUGH EACH TASK TO SEE IF STATUS MATCHES FILTER SELECTED, PRIORITY, OR SEARCH
    return tasks.filter(task => {
        // CONDITIONAL TO SHOW ALL IF NO FILTER IS SELECTED
        const matchesStatus =
            !filters.status || task.status === filters.status;

        // SAME FOR PRIORITY
        const matchesPriority =
            !filters.priority || task.priority === filters.priority;

        // SAME FOR SEARCH (CHANGE TO LOWER CASE FOR EASY MATCHING)
        const matchesSearch =
            !filters.search || task.title.toLocaleLowerCase().includes(filters.search.toLocaleLowerCase());

        // RETURNS VARIABLES TO TELL .FILTER() TO KEEP OR REMOVE TASK
        return matchesStatus && matchesPriority && matchesSearch;
    })
}

// FUNCTION FOR SORTING TASKS
export function sortTasks(tasks: Task[], sortBy: string) {
    // ADD IF ELSE STATEMENT TO HANDLE SORTING BY PRIORITY OR DATE
    // ASSIGN EACH PRIORITY A NUMERIC VALUE TO SORT FROM HIGH TO LOW
    if (sortBy === "priority") {
        const priorityOrder: Record<string, number> = {
            high: 3,
            medium: 2,
            low: 1,
        };
        // SORT() TAKES COMPARISION FUNCTION
        // B COMES FIRST IF RESULT IS POSITIVE, A IF RESULT IS NEGATIVE
        return [...tasks].sort(
            (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
        );
    } else if (sortBy === "date") { 
        return [...tasks].sort((a, b) => {
            // DUEDATE IS OPTIONAL, HANDLE MISSING DUE DATES
            
        }
        )
    }
}