import { project } from "./project";

const listOfProjects = (() => {

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

    return {setProject, getProjects, deleteProject};

}) ();

export { listOfProjects };