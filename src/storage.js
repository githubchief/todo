import { listOfProjects } from "./listOfProjects";
import { project } from "./project";
import { task } from "./task";

const storage = () => {
    
    const saveListOfProjects = (lop) => {
        localStorage.setItem('lop', JSON.stringify(lop));
    }

    const getListOfProjects = () => {
        
        let prjList = localStorage.getItem('lop') ;
        let lop ;
        //if localstorage is empty return a empty listofProjects
        if(prjList === null ) {
            lop =listOfProjects([]);
            return lop;
        } 

        //creating lop from stored projectlists
        lop = listOfProjects(JSON.parse(prjList)); 

        //creating projects (title alone) to the restored lop with project properties
        let lopProperties = listOfProjects ();
        lop.getProjects().forEach(prjString => {
            lopProperties.setProject(project({
                title : prjString.title
            }))
        });
        
        //creating task to restored projects with task properties
        lop.getProjects().forEach(project => {
            for(let taskCount = 0; taskCount < project.projectTasks.length; taskCount++ )
            {   
                let newTask = task(project.projectTasks[taskCount]);
                lopProperties.getProjectByName(project.title).setProjectTasks(newTask);
            }
        });
        return lopProperties;
    }

    const saveProject = (newProject) => {
        let lop = getListOfProjects();
        lop.setProject(newProject);
        saveListOfProjects(lop.projectList);
    }

    const saveTask = (project, task) => {
        let lop = getListOfProjects();
        lop.getProjectByName(project.getProjectTitle()).setProjectTasks(task);
        saveListOfProjects(lop.projectList);
    }

    const renameProject = (project, projectTitle) => {
        let lop = getListOfProjects();
        lop.getProjectByName(project.getProjectTitle()).setProjectTitle(projectTitle);
        saveListOfProjects(lop.projectList);
    }
    return {saveListOfProjects,
            getListOfProjects,
            saveProject,
            saveTask,
            renameProject
            }; 
}


export { storage }