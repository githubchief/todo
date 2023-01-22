import { listOfProjects } from "./listOfProjects";
import { project } from "./project";
import { task } from "./task";

const storage = () => {
    
    //localStorage.setItem('lop',JSON.stringify(""));
    
    const saveListOfProjects = (data) => {
        localStorage.setItem('lop', JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem('lop')));
    }

    const getListOfProjects = () => {
        let lop = Object.assign(listOfProjects, JSON.parse(localStorage.getItem('lop'))) ;
        console.log(lop);
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
