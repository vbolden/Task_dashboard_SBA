// EXPORT INTERFACES AND TYPES

export type Status = "pending" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";
export type SortOption = "priority" | "date";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    dueDate?: string
}

export interface TaskFormData {
    title: string;
    description: string;
    priority: Priority;
    dueDate?: string;
}

export interface FilterOptions {
    status?: Status;
    priority?: Priority;
    search?: string;
}

export type TaskFormErrors = Partial<Record<keyof TaskFormData, string>>;