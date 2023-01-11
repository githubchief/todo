const task = (item) => {

    this.title = item.title;
    this.description = item.description;

    const getTaskTitle = () => {
        return title;
    }

    const getTaskDesription = () => {
        return description;
    }

    const setTaskTitle = (temp) => {
        title = temp;
    }

    const setTaskDescription = (temp) => {
        description = temp;
    }


    return {getTaskTitle, getTaskDesription, setTaskDescription, setTaskTitle};
};

export { task };