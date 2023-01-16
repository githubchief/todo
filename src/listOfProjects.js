import { project } from "./project";

const listOfProjects = () => {

    let projectList=[];

    const setProject = (prjTitle) => {
        let temp = project(prjTitle);
        projectList.push(temp);
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

    return {setProject, getProjects, deleteProject, getProjectByName};

};

export { listOfProjects };