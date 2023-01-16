import { listOfProjects } from "./listOfProjects";
import { task } from "./task";
import { project } from "./project";

const Dom = () => {

    const projectForm = document.querySelector('#create-project-form');
    const taskForm = document.querySelector('#create-task-form');
    const projectContainer = document.querySelector('#project-list-container');
    const taskContainer = document.querySelector('#task-container');
    let projectTitleHeader = document.querySelector('.project-title-header');
    let lop = listOfProjects();
    let taskFormEventAdded = false;
    lop.setProject("Project");

    let iTask = {
        title:"odin1",
        description:"to do list"
    };

    let jTask = {
        title:"odin2",
        description:"to do list"
    };

    lop.getProjectByName("Project").setProjectTasks(task(iTask));
    lop.getProjectByName("Project").setProjectTasks(task(jTask));

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

            //event listener to display project tasks
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

            //event listener to edit and delete the project
            projectIcon.addEventListener('click', (e)=> {
                projectEditFormEventListener();
            });
            projectContainer.appendChild(projectEl);
            
        });
    };

    const displayTasks = (project) => {

        while (taskContainer.firstChild) {
            taskContainer.removeChild(taskContainer.firstChild);
        }
        
        //project header displayed above the list of tasks
        projectTitleHeader.innerText = project.getProjectTitle();

        project.getProjectTasks().forEach(task => {

            //display complete details of the task
            const taskEl = document.createElement('div');
            taskEl.innerText = task.getTaskTitle();
            taskContainer.appendChild(taskEl);

            //add event listener to task 3 dot icon element, when clicked call task edit form
            taskEl.addEventListener('click', (e)=> {
                taskEditFormEventListener();
            });
        });

        //after all tasks, show add task button
        taskFormEventListener();

    };

    //add event listener to project-addition form and handle the same
    const projectFormEventListener = () => {
        projectForm.addEventListener('submit', (e) => {
            e.preventDefault();
            //when project title is submitted, call setproject to create a project and push it to the listofprojects.
            const title = document.getElementById("project-title").value;
            lop.setProject(title);
            //display updated projects list
            displayProjects();
        });
    };

    //add event listener to edit project form and handle the same
    const projectEditFormEventListener = () => {
        //display edit and delete buttons
        //when edit clicked, call edit function (setProjectTitle) 
            //when edit is clicked, form has to be prepopulated with already existing data.
        //when delete clicked, call delete function (deleteProject)

    }

    //add event listener to task-addition form and handle the same
    const taskFormEventListener = () => {

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

    //add event listener to edit task form and handle the same
    const taskEditFormEventListener = () => {
        //display task form and populate with already existing data
    }

    return { display };
}

export { Dom };


