const listOfProjects = (projectList=[]) => {

    let setProject = (prj) => {
        projectList.push(prj);
    }

    let getProjects = () => {
        return projectList;
    }

    let deleteProject = (tempPrj) => {
        projectList = projectList.filter(prj => prj.getProjectTitle() !== tempPrj.getProjectTitle());
    }

    let getProjectByName = (prjName) => {
            return projectList.find(p => p.getProjectTitle() === prjName);
    }

    let toJSON = () => {
        
        return {
            projectList
        };
    }

    return {projectList, setProject, getProjects, deleteProject, getProjectByName, toJSON};

};

export { listOfProjects };
