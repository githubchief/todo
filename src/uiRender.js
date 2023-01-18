import { listOfProjects } from "./listOfProjects";
import { task } from "./task";
import { project } from "./project";

const Dom = () => {
  const projectForm = document.querySelector("#create-project-form");
  const editProjectForm = document.querySelector("#edit-project-form");
  const taskForm = document.querySelector("#create-task-form");
  const projectContainer = document.querySelector("#project-list-container");
  const taskContainer = document.querySelector("#task-list-container");
  const addProject = document.querySelector("#add-project");
  const addTask = document.querySelector("#add-task");
  const renameProject = document.querySelector("#rename-project");
  const deleteProject = document.querySelector("#delete-project");

  let projectTitleHeader = document.querySelector(".project-title-header");
  let lop = listOfProjects();
  lop.setProject("Project 1");
  lop.setProject("Project 2");
  lop.setProject("Project 3");

  let iTask = {
    title: "odin1",
    description: "to do list",
  };

  let jTask = {
    title: "odin2",
    description: "to do list",
  };

  lop.getProjectByName("Project 1").setProjectTasks(task(iTask));
  lop.getProjectByName("Project 1").setProjectTasks(task(jTask));

  const display = () => {
    displayProjects();

    addProject.addEventListener("click", () => {
      projectForm.classList.toggle("visible");
    });

    addTask.addEventListener("click", () => {
        taskForm.classList.toggle("visible");
      });
    projectFormEventListener();
  };

  const displayProjects = () => {
    let prjtList = lop.getProjects();
    while (projectContainer.firstChild) {
      projectContainer.removeChild(projectContainer.firstChild);
    }

    prjtList.forEach((project) => {
      const projectEl = document.createElement("div");
      projectEl.className = "project-list";
      let iconEl = document.createElement("i");
      iconEl.className = "fa-solid fa-list";
      let titleEl = document.createElement("span");
      titleEl.innerText = project.getProjectTitle();
      let editEl = document.createElement("i");
      editEl = document.createElement("i");
      editEl.className = "fa-solid fa-ellipsis-vertical project-edit";
      projectEl.appendChild(iconEl);
      projectEl.appendChild(titleEl);
      projectEl.appendChild(editEl);

      //event listener to display project tasks
      projectEl.addEventListener("click", (e) => {
        let temp = document.querySelector("#data-selected-project");
        if (temp) {
          temp.removeAttribute("id");
        }
        titleEl.setAttribute("id", "data-selected-project");
        displayTasks(project);
        // if (!taskFormEventAdded) {
        //   taskFormEventAdded = true;
        //   taskFormEventListener(projectEl);
        // }
      });
      //event listener to edit and delete the project
      editEl.addEventListener("click", projectEditFormEventListener(editEl));
      projectContainer.appendChild(projectEl);
    });
  };

  const displayTasks = (project) => {

    while (taskContainer.firstChild) {
      taskContainer.removeChild(taskContainer.firstChild);
    }
    
    //project header displayed above the list of tasks
    projectTitleHeader.innerText = project.getProjectTitle();

    project.getProjectTasks().forEach((task) => {

      //display complete details of the task
      const taskEl = document.createElement("div");
      taskEl.className = "task-list";
    
        
      let titleEl = document.createElement("p");
      titleEl.innerText = task.getTaskTitle();
      
      let descriptionEl = document.createElement("p");
      descriptionEl.innerText = task.getTaskDescription();
      
      let dueDateEl = document.createElement("p");
      dueDateEl.innerText = task.getDueDate();
      
      let importanceEl = document.createElement("p");
      importanceEl.innerText = task.getImportance();
      
    //   let statusEl = document.createElement("p");
    //   statusEl.innerText = task.getStatus();
      
      taskEl.appendChild(titleEl);
      taskEl.appendChild(descriptionEl);
      taskEl.appendChild(dueDateEl);
      taskEl.appendChild(importanceEl);
      //taskEl.appendChild(statusEl);
      
      taskContainer.appendChild(taskEl);

      //add event listener to task 3 dot icon element, when clicked call task edit form
      taskEl.addEventListener("click", (e) => {
        taskEditFormEventListener();
      });
    });

    //after all tasks, show add task button
    //call event listener to include task form
    taskFormEventListener();
  };

  //add event listener to project-addition form and handle the same
  const projectFormEventListener = () => {
    projectForm.addEventListener("submit", (e) => {
      e.preventDefault();
      //when project title is submitted, call setproject to create a project and push it to the listofprojects.
      const title = document.getElementById("project-title").value;
      lop.setProject(title);
      //display updated projects list
      displayProjects();
      projectForm.classList.toggle("visible");
    });
  };

  const renameProjectFormCallBack = (e) => {
    e.preventDefault();
    let selectedProjectTitle = document.querySelector(
       "#data-selected-project"
        ).innerText;
    let selectedProject = lop.getProjectByName(selectedProjectTitle);
    let newProjectTitle = document.getElementById("edit-project-title");

    //when edit is clicked, form has to be prepopulated with already existing data.
    newProjectTitle.setAttribute("name", "selectedProjectTitle");
    selectedProject.setProjectTitle(newProjectTitle.value);
    displayProjects();
    editProjectForm.classList.toggle("visible");   
  };

  const deleteProjectFormCallBack = (e) => {
    e.preventDefault();
        let selectedProjectTitle = document.querySelector(
            "#data-selected-project"
        ).innerText;
        let selectedProject = lop.getProjectByName(selectedProjectTitle);
        lop.deleteProject(selectedProject);
        displayProjects();
        editProjectForm.classList.toggle("visible");   
       //once project is deleted, take user to home page.
  };

  //add event listener to edit project form and handle the same
  const projectEditFormEventListener = (editEl) => {

    //display edit and delete buttons
    editEl.addEventListener("click", ()=> {
        editProjectForm.classList.toggle("visible");
    });

    //when edit clicked, call setProjectTitle function
    renameProject.addEventListener("click", renameProjectFormCallBack);

    //when delete is clicked, call delete function (deleteProject)
    deleteProject.addEventListener("click", deleteProjectFormCallBack);

  };

  const taskFormCallback = (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("due-date").value;
    const important = document.getElementById("important").value;
    const tempTask = task({ title, description, dueDate, important });
    let selectedProjectTitle = document.querySelector(
      "#data-selected-project"
    ).innerText;
    let selectedProject = lop.getProjectByName(selectedProjectTitle);
      selectedProject.setProjectTasks(tempTask);
      displayTasks(selectedProject);
      taskForm.reset();
  };

  //add event listener to task-addition form and handle the same
  const taskFormEventListener = () => {

    // Remove any existing event listeners for the task form
    taskForm.removeEventListener("submit", taskFormCallback);
    // Add new event listener for task form submission
    taskForm.addEventListener("submit", taskFormCallback);
    
  };

  //add event listener to edit task form and handle the same
  const taskEditFormEventListener = () => {
    //display task form and populate with already existing data
  };

  return { display };
};

export { Dom };
