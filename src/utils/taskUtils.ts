// ADD DATA LOGIC FOR FILTER, SEARCH, AND SORT
import type { Task, TaskFilterOptions, TaskFormData, TaskFormErrors } from "../types";

// FUNCTION TO CHECK IF TASK STATUS, PRIORITY, OR SEARCH MATCHES SELECTED STATUS, FILTER, OR SEARCH
export function filterTasks(tasks: Task[], filters: TaskFilterOptions) {
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
            if(!a.dueDate && !b.dueDate) return 0;
            if (!a.dueDate) return 1 // A NO DUE DATE GOES AFTER B
            if (!b.dueDate) return -1 // B NO DUE DATE GOES AFTER A

            // BOTH HAVE DUE DATES COMPARE NORMALLY
            // NEGATIVE A COMES FIRST 
            // POSITIVE B COMES FIRST
            return (
                new Date(a.dueDate).getTime() - 
                new Date(b.dueDate).getTime()
            );
        });
    } return tasks;
}

// ADD FORM VALIDATION
export function validateTask(data: TaskFormData) {
    // VARIABLE TO STORE VALIDATION ERRORS
    const errors: TaskFormErrors = {};

    if(!data.title.trim()) {
        errors.title = "Title is required";
    }
    if(!data.description.trim()) {
        errors.description = "Description is required";
    }
    if(!data.priority) {
        errors.priority = "Priority is required";
    }
    // DATE OPTIONAL, CHECK IF VALUE EXISTS AND IS NOT A NUMBER
    // CONVERT STRING INTO TIMESTAMP
    if(data.dueDate && isNaN(Date.parse(data.dueDate))) {
        errors.dueDate = "Invalid date";
    }

    return errors;
}