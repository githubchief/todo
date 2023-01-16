const task = (item) => {
    
    let taskTitle = item.title;
    let taskDescription = item.description;
    let dueDate = item.dueDate|| "no due date";
    let important = item.important || false;

    const getTaskTitle = () => {
        return taskTitle;
    }

    const getTaskDescription = () => {
        return taskDescription;
    }

    const getDueDate = () => {
        return  dueDate;
    }

    const getImportance = () => {
        return important;
    }

    const setTaskTitle = (temp) => {
        taskTitle = temp;
    }

    const setTaskDescription = (temp) => {
        taskDescription = temp;
    }

    const setDueDate = (temp) => {
        dueDate = temp;
    }

    const setImportance = (temp) => {
        important = temp;
    }

    return {getTaskTitle, 
            getTaskDescription, 
            getDueDate,
            getImportance,
            setTaskDescription, 
            setTaskTitle,
            setDueDate,
            setImportance
            };
};

export { task };