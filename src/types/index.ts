// EXPORT INTERFACES AND TYPES

export type Status = "pending" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    dueDate?: string
}

export interface TaskFormProps {
    title: string;
    description: string;
    priority: Priority;
    dueDate?: string;
}

export interface TaskFilterProps {
    status?: Status;
    priority?: Priority;
    search?: string;
}