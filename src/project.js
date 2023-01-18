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

    const deleteTask = (tempTask) => {
        projectTasks = projectTasks.filter(task => task.getTaskTitle() !== tempTask.getTaskTitle());
    }

    const getTaskByName = (taskName) => {
        return projectTasks.find(p => p.getTaskTitle() === taskName);
    }

    return { getProjectTasks, 
             getProjectTitle, 
             setProjectTasks, 
             setProjectTitle, 
             deleteTask,
             getTaskByName
            };

};


export { project };