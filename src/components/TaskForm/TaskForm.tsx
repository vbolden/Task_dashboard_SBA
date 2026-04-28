import { useState } from "react";
import type { TaskFormData, TaskFormErrors, TaskFormProps } from "../../types";
import { validateTask } from "../../utils/taskUtils";

function TaskForm ({onAddTask}: TaskFormProps) {
    // ADD STATE FOR FORM DATA AND ERROR
    const [formData, setFormData] = useState<TaskFormData> ({
        title: "",
        description: "",
        priority: "medium",
        dueDate: "",
    });

    const [errors, setErrors] = useState<TaskFormErrors>({});

    // CALLBACK FUNCTION FOR INPUT 
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    // CALLBACK FUNCTION FOR SUBMIT
    const handleSubmit = (e: React.FormEvent) => {
        // PREVENT PAGE REFRESH ON SUBMIT
        e.preventDefault();

        // CHECK FOR VALIDATION ERRORS AND SET ERRORS 
        const validationErrors = validateTask(formData);
        setErrors(validationErrors);

        // STOP FUNCTION EARLY IF THERE ARE ERRORS
        if (Object.keys(validationErrors).length > 0) return; 

        onAddTask(formData);

        // RESET FORM 
        setFormData({
            title: "",
            description: "",
            priority: "medium",
            dueDate: "",
        });

    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange} />
            {errors.title && <p>{errors.title}</p>}

            <input
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange} />
            {errors.description && <p>{errors.description}</p>}

            <select 
            name="priority"
            value={formData.priority}
            onChange={handleChange} >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>
            {errors.priority && <p>{errors.priority}</p>}

            <input 
            type="date"
            name="dueDate"
            value={formData.dueDate || ""} 
            onChange={handleChange} />
            {errors.dueDate && <p>{errors.dueDate}</p>}

            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;