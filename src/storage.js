import { listOfProjects } from "./listOfProjects";
import { project } from "./project";
import { task } from "./task";

const storage = () => {
    
   // localStorage.setItem('lop',JSON.stringify(lop.projectList));
   localStorage.setItem('lop', JSON.stringify(" hi "));
    let prjList =JSON.parse(localStorage.getItem('lop'));
    
    let lop = listOfProjects(prjList);
    console.log(lop.projectList);
    const saveListOfProjects = (data) => {
        localStorage.setItem('lop', JSON.stringify(data));
        console.log(JSON.parse(localStorage.getItem('lop')));
    }

    const getListOfProjects = () => {
        console.log(JSON.parse(localStorage.getItem('lop')));
        //let lop = Object.assign(listOfProjects.projectList, JSON.parse(localStorage.getItem('lop'))) ;
        let prjList =JSON.parse(localStorage.getItem('lop'));
        let lop = listOfProjects(prjList);
        // console.log(typeof(lop));
        // console.log(typeof(prjList));
        console.log(lop.getProjects());
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
