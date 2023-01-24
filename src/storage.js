import { listOfProjects } from "./listOfProjects";
import { project } from "./project";
import { task } from "./task";

const storage = () => {
    let lop = listOfProjects();
    localStorage.setItem('lop',JSON.stringify(lop.projectList));
    console.log(lop.projectList);
    const saveListOfProjects = (data) => {
        localStorage.setItem('lop', JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem('lop')));
    }

    const getListOfProjects = () => {
        let lop = Object.assign(listOfProjects.projectList, JSON.parse(localStorage.getItem('lop'))) ;
        console.log(JSON.parse(localStorage.getItem('lop')));
        lop.setProject( lop.getProjects().map((prj) => prj.getProjectTitle()));
        lop.getProjects().forEach((prj => prj.setProjectTasks(prj.getProjectTasks().map((tempTask)=> Object.assign(task, tempTask)))));
        return lop;
    }

    const saveProject = (prjTitle) => {
        debugger;
        const lop = getListOfProjects();
        lop.setProject(prjTitle);
        console.log(lop);
        saveListOfProjects(lop);
    }

    return {saveListOfProjects,
            getListOfProjects,
            saveProject
            }; 
}


export { storage }
