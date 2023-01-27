import { project } from "./project";

const listOfProjects = (projectList=[]) => {

    const setProject = (prjTitle) => {
        let prj = project(prjTitle)
        projectList.push(prj);
    }

    const getProjects = () => {
        return projectList;
    }

    const deleteProject = (tempPrj) => {
        projectList = projectList.filter(prj => prj.getProjectTitle() !== tempPrj.getProjectTitle());
    }

    const getProjectByName = (prjName) => {
            return projectList.find(p => p.getProjectTitle() === prjName);
    }

    const toJSON = () => {
        
        return {
            
            projectList : projectList,
            setProject : setProject,
            getProjects : getProjects,
            deleteProject : deleteProject,
            getProjectByName : getProjectByName
        };
    }

    return {projectList, setProject, getProjects, deleteProject, getProjectByName, toJSON};

};

export { listOfProjects };
