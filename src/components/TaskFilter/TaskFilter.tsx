import type { Status, Priority, SortOption, TaskFilterProps } from "../../types";

function TaskFilter ({filters, sortBy, onFilterChange, onSortChange}: TaskFilterProps) {

    return (
        <div className="filter">
            <input 
            placeholder="Search.."
            value={filters.search || ""}
            onChange={(e) => 
                onFilterChange({...filters, search: e.target.value})
            } />

            <select 
            value={filters.status || ""}
            onChange={(e) => 
                onFilterChange({
                    ...filters,
                    status: e.target.value as Status,
                })
            } >
                <option value="">All</option>
                <option value="todo">Todo</option>
                <option value="in-progress">All</option>
                <option value="done">All</option>
            </select>

            <select
            value={filters.priority || ""}
            onChange={(e) => 
                onFilterChange({
                    ...filters,
                    priority: e.target.value as Priority,
                })
            } >
                <option value="">All</option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>

            <select
            value={sortBy || ""}
            onChange={(e) => onSortChange(e.target.value as SortOption)} >
                <option value="">Sort by</option>
                <option value="date">Date</option>
                <option value="priority">Priority</option>
            </select>
        </div>
    );
}

export default TaskFilter;