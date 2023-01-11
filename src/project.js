const project = (item) => {

    this.title = item.title;
    this.projectTasks = [];

    const getTitle = () => {
        return this.title;
    }

    const getTasks = () => {
        return this.projectTasks;
    }

    const setTitle = (temp) => {
        title = temp;
    }

    const setTask = (tempTask) => {
        projectTasks.push(tempTask);
    }

    return {getTasks, getTitle, setTitle, setTask};

};


export { project };