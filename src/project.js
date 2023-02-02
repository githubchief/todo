const project = (project) => {

    let title = project.title;
    let projectTasks = project.projectTasks || [];

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

    const toJSON = () => {
        return {
            title,
            projectTasks,
        }
    }
    return {projectTasks, 
            getProjectTasks, 
            getProjectTitle, 
            setProjectTasks, 
            setProjectTitle, 
            deleteTask,
            getTaskByName,
            toJSON
            };

};


export { project };