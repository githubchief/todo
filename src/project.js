const project = (prjTitle) => {

    let title = prjTitle;
    let projectTasks = [];

    const getProjectTitle = () => {
        return title;
    }

    const getProjectTasks = () => {         
        return projectTasks;
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