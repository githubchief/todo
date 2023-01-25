import { listOfProjects } from "./listOfProjects";
import { project } from "./project";
import { task } from "./task";

const storage = () => {
    
   // localStorage.setItem('lop',JSON.stringify(lop.projectList));
   let prjList = [];
   localStorage.setItem('lop', JSON.stringify(prjList));
//    prjList =JSON.parse(localStorage.getItem('lop'));
    
//     let lop = listOfProjects(prjList);
    //console.log(lop.projectList);
    const saveListOfProjects = (data) => {
        localStorage.setItem('lop', JSON.stringify(data));
        //console.log(JSON.parse(localStorage.getItem('lop')));
    }

    const getListOfProjects = () => {
        //console.log(JSON.parse(localStorage.getItem('lop')));
        //let lop = Object.assign(listOfProjects.projectList, JSON.parse(localStorage.getItem('lop'))) ;
        let prjList =JSON.parse(localStorage.getItem('lop'));
        let lop = listOfProjects(prjList);
        // console.log(typeof(lop));
        // console.log(typeof(prjList));
        // console.log(prjList);
        // console.log(lop);
        // console.log(lop.projectList);
        // console.log(lop.getProjects());

        lop.getProjects().forEach(prj => {
            lop.setProject(project(prj));
        });
        
        // lop.setProject( lop.projectList.map((prj) => {
        //     prj.getProjectTitle();
        // })
        // );
        console.log(lop);
        console.log(lop.projectList);
        let counter = 0;
        lop.projectList.forEach(prj => {
            
            //counter++;
            if (counter++ == 0){
                return;
            }
               console.log(prj.getProjectTitle());
        });

        lop.getProjects().forEach((prj => {
            prj.getProjectTasks().forEach(tempTask => {
                prj.setProjectTasks(Object.assign(task, tempTask));
            });
            
        })); 
        //prj.setProjectTasks(prj.getProjectTasks().map((tempTask)=> Object.assign(task, tempTask)))
        return lop;
    }

    const saveProject = (newProject) => {
        
        let lop = getListOfProjects();
        lop.setProject(newProject);
        saveListOfProjects(lop.projectList);
    }

    return {saveListOfProjects,
            getListOfProjects,
            saveProject
            }; 
}


export { storage }
