import format from "date-fns/format";
const task = (item) => {
    
    let taskTitle = item.title;
    let taskDescription = item.description;
    let dueDate = format(new Date(), 'dd/mm/yyyy');
    let important = false;

    const getTaskTitle = () => {
        return taskTitle;
    }

    const getTaskDesription = () => {
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
            getTaskDesription, 
            getDueDate,
            getImportance,
            setTaskDescription, 
            setTaskTitle,
            setDueDate,
            setImportance
            };
};

export { task };