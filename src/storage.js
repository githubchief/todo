import { listOfProjects } from "./listOfProjects";
import { project } from "./project";
import { task } from "./task";

const storage = () => {
    
    const saveListOfProjects = (data) => {
        localStorage.setItem('lop', JSON.stringify(data));
        console.log("saving lop...");
        console.log((localStorage.getItem('lop')));
    }

    const getListOfProjects = () => {
        
        let prjList;

        //if localstorage is empty return a empty listofProjects
        if(localStorage.getItem('lop') === null ) {
            console.log("prjlist is null");
            let lop=listOfProjects([]);
            console.log(lop);
            return lop;
        } else {
            console.log((localStorage.getItem('lop')));
            prjList = JSON.parse(localStorage.getItem('lop'));
            console.log("Project list is not empty...")
        }
        console.log(prjList);
        let lop = listOfProjects(prjList.projectList);
        console.log(lop.getProjects());

        
        //adding project object properties to the listofprojects from localstorage 
        let lopWithProjectProperties=listOfProjects([]);
        lop.getProjects().forEach(prj => {
            console.log("setting project...");
            console.log(prj);
            lopWithProjectProperties.setProject(prj);
            console.log("project setting completed");
        });
        
        //snippet to check if project object in the lop has all the member function properties.
        let counter = 0;
        lopWithProjectProperties.getProjects().forEach(prj => {
            console.log(prj);
            console.log("inside projects", counter);
            console.log(prj.getProjectTitle()); 
            counter++;
        });

        // lop.getProjects().forEach((prj => {
        //     prj.getProjectTasks().forEach(tempTask => {
        //         prj.setProjectTasks(Object.assign(task, tempTask));
        //     });
            
        // })); 
        //prj.setProjectTasks(prj.getProjectTasks().map((tempTask)=> Object.assign(task, tempTask)))
        return lopWithProjectProperties;
    }

    const saveProject = (newProjectTitle) => {
        //console.log(newProject.getProjectTitle());
        let lop = getListOfProjects();
        lop.setProject(newProjectTitle);
        saveListOfProjects(lop);
    }

    return {saveListOfProjects,
            getListOfProjects,
            saveProject
            }; 
}


export { storage }
