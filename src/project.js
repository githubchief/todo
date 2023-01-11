const project = (item) => {

    this.title = item.title;
    this.projectTasks = [];

    const getProjectTitle = () => {
        return this.title;
    }

    const getProjectTasks = () => {
        return this.projectTasks;
    }

    const setProjectTitle = (temp) => {
        title = temp;
    }

    const setProjectTasks = (tempTask) => {
        projectTasks.push(tempTask);
    }

    return { getProjectTasks, getProjectTitle, setProjectTasks, setProjectTitle};

};


export { project };