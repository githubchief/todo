const task = (item) => {
    
    let taskTitle = item.title;
    let taskDescription = item.description;
    let dueDate = item.dueDate|| "no due date";
    let important = item.important || false;
    let status = item.compelete|| false;

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

    const getStatus = () => {
        return status;
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

    const setstatus = (temp) => {
         status = temp;
    }

    return {getTaskTitle, 
            getTaskDescription, 
            getDueDate,
            getImportance,
            getStatus,
            setTaskDescription, 
            setTaskTitle,
            setDueDate,
            setImportance,
            setstatus
            };
};

export { task };