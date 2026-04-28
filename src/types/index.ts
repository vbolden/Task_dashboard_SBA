// EXPORT INTERFACES AND TYPES

export type Status = "todo" | "in-progress" | "done";
export type Priority = "low" | "medium" | "high";
export type SortOption = "priority" | "date" | "";

export interface Task {
    id: string;
    title: string;
    description: string;
    status: Status;
    priority: Priority;
    dueDate?: string
}

export interface TaskItemProps {
    task: Task;
    onStatusChange: (id: string, status: Status) => void;
    onDelete: (id: string) => void;
    onEdit: (task: Task) => void
}

export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (id: string, status: Status) => void;
    onDelete: (id: string) => void;
    onEdit: (task: Task) => void;
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

export interface TaskFilterProps {
    filters: FilterOptions;
    sortBy: SortOption;
    onFilterChange: (filters: FilterOptions) => void;
    onSortChange: (sort: SortOption) => void;
}

export type TaskFormErrors = Partial<Record<keyof TaskFormData, string>>;

// ADD PROPS FOR EDITING TASKS
export interface TaskFormProps {
    onAddTask: (data: TaskFormData) => void;
    onUpdateTask: (id: string, data: TaskFormData) => void;
    editingTask?: Task | null;
}