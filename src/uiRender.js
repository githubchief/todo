import { listOfProjects } from "./listOfProjects";
import { task } from "./task";
import { project } from "./project";

const Dom = () => {

    const projectForm = document.querySelector('#create-project-form');
    const taskForm = document.querySelector('#create-task-form');
    const projectContainer = document.querySelector('#project-container');
    const taskContainer = document.querySelector('#task-container');
    let lop = listOfProjects();
    let taskFormEventAdded = false;
    lop.setProject("Project 1");
    lop.setProject("Project 2");

    let iTask = {
        title:"odin1",
        description:"to do list"
    };

    let jTask = {
        title:"odin2",
        description:"to do list"
    };

    lop.getProjectByName("Project 1").setProjectTasks(task(iTask));
    lop.getProjectByName("Project 2").setProjectTasks(task(jTask));

    const display = () => {

        displayProjects();
        projectFormEventListener();

    }

    const displayProjects = () => {
        let prjtList = lop.getProjects();
        while (projectContainer.firstChild) 
        {
            projectContainer.removeChild(projectContainer.firstChild);
        }

        prjtList.forEach(project => {
            const projectEl = document.createElement('div');
            projectEl.className = "project-list";
            projectEl.innerText = project.getProjectTitle();
            projectEl.addEventListener('click', (e) => {

                let temp = document.querySelector('#data-selected-project');

                if(temp){
                    temp.removeAttribute("id");
                }

                projectEl.setAttribute("id", "data-selected-project" );
                displayTasks(project);
                if (!taskFormEventAdded) {
                    taskFormEventAdded = true;
                    taskFormEventListener(projectEl);
                }
            });
            projectContainer.appendChild(projectEl);
            
        });
    };

    const displayTasks = (project) => {
        while (taskContainer.firstChild) {
            taskContainer.removeChild(taskContainer.firstChild);
        }
        project.getProjectTasks().forEach(task => {
            const taskEl = document.createElement('div');
            taskEl.innerText = task.getTaskTitle();
            taskContainer.appendChild(taskEl);
        })
    };

    const projectFormEventListener = () => {
        // Add event listener for project form submission 
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            //when project title is submitted, call setproject to create a project and push it to the listofprojects.
            const title = document.getElementById("project-title").value;
            lop.setProject(title);
            //display updated projects list
            displayProjects();
        });
    };

    const taskFormEventListener = (projectEl) => {

        const taskFormCallback = (e) => {
            e.preventDefault();
            const title = document.getElementById("task-title").value;
            const description = document.getElementById("task-description").value;
            const dueDate = document.getElementById("due-date").value;
            const important = document.getElementById("important").value;
            const tempTask = task({ title, description, dueDate, important });

            let selectedProject = lop.getProjectByName(document.querySelector('#data-selected-project').innerText);
            if( selectedProject) {
                selectedProject.setProjectTasks(tempTask);
                displayTasks(selectedProject);
                taskForm.reset();
            }
        }

        // Remove any existing event listeners for the task form
        taskForm.removeEventListener('submit', taskFormCallback);
        // Add new event listener for task form submission
        taskForm.addEventListener('submit', taskFormCallback);
        taskFormEventAdded = false;
    }

    return { display };
}

export { Dom };


