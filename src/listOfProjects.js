import { project } from "./project";

const listOfProjects = (() => {

    let projectList=[];

    const setProject = (prjTitle) => {
        let temp = project(prjTitle);
        projectList.push(temp);
    }

    const getProjects = () => {

        let projectTitles = [];
        projectList.forEach(element => {
            projectTitles.push(element.getProjectTitle());
        });
         
        return projectTitles;
        }

    return {setProject, getProjects};

}) ();

export { listOfProjects };