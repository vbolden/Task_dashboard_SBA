import { useEffect, useState } from "react";
import type { TaskFormData, TaskFormErrors, TaskFormProps } from "../../types";
import { validateTask } from "../../utils/taskUtils";
import "../../TaskForm.css";

function TaskForm({ onAddTask, onUpdateTask, editingTask }: TaskFormProps) {
    // ADD STATE FOR FORM DATA AND ERROR
    const [formData, setFormData] = useState<TaskFormData>({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
    });

    const [errors, setErrors] = useState<TaskFormErrors>({});

    // SYNC EDIT CHANGES WITH useEffect
    useEffect(() => {
        if (editingTask) {
            setFormData({
                title: editingTask.title,
                description: editingTask.description,
                priority: editingTask.priority,
                dueDate: editingTask.dueDate || "",
            });
        }
    }, [editingTask]);


    // CALLBACK FUNCTION FOR INPUT 
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // CALLBACK FUNCTION FOR SUBMIT
    const handleSubmit = (e: React.SubmitEvent) => {
        // PREVENT PAGE REFRESH ON SUBMIT
        e.preventDefault();

        // CHECK FOR VALIDATION ERRORS AND SET ERRORS 
        const validationErrors = validateTask(formData);
        setErrors(validationErrors);

        // STOP FUNCTION EARLY IF THERE ARE ERRORS
        if (Object.keys(validationErrors).length > 0) return;

        // LOGIC FOR UPDATING TASK
        if (editingTask) {
            onUpdateTask(editingTask.id, formData);
        } else {
            onAddTask(formData);
        }

        // RESET FORM 
        setFormData({
            title: "",
            description: "",
            priority: "medium",
            dueDate: "",
        });

    };

    return (
        <div className="task-form-card">
            <form onSubmit={handleSubmit} className="task-form">
                <h2>
                    {editingTask ? "Edit Task" : "Create New Task"}
                </h2>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        name="title"
                        placeholder="Enter task title..."
                        value={formData.title}
                        onChange={handleChange} />

                    {errors.title && (
                        <p className="error-message">{errors.title}</p>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description</label>

                    <textarea
                        name="description"
                        rows={4}
                        placeholder="Descibe your task..."
                        value={formData.description}
                        onChange={handleChange} />

                    {errors.description && (
                        <p className="error-message">{errors.description}</p>
                    )}
                </div>

                <div className="form-row">
                    <div className="form-group">
                        <label htmlFor="priority">Priority</label>

                        <select
                            className="task-select"
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>

                        {errors.priority && (
                            <p className="error-message">{errors.priority}</p>
                        )}
                    </div>

                    <div className="form-group">
                        <label htmlFor="dueDate">Due Date</label>

                        <input
                            type="date"
                            name="dueDate"
                            value={formData.dueDate || ""}
                            onChange={handleChange} />

                        {errors.dueDate && (
                            <p className="error-message">{errors.dueDate}</p>
                        )}
                    </div>
                </div>

                <button
                    type="submit"
                    className="primary-btn"
                >
                    {editingTask ? "Update Task" : "Add Task"}
                </button>
            </form>
        </div>
    );
}

export default TaskForm;