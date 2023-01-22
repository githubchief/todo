import { listOfProjects } from "./listOfProjects";
import { task } from "./task";
  import { storage } from "./storage";
import { project } from "./project";

const Dom = () => {
  const projectForm = document.querySelector("#create-project-form");
  const editProjectForm = document.querySelector("#edit-project-form");
  const taskForm = document.querySelector("#create-task-form");
  const editTaskForm = document.querySelector("#edit-task-form");
  const projectContainer = document.querySelector("#project-list-container");
  const taskContainer = document.querySelector("#task-list-container");
  const addProject = document.querySelector("#add-project");
  const addTask = document.querySelector("#add-task");
  const renameProject = document.querySelector("#rename-project");
  const deleteProject = document.querySelector("#delete-project");
  const editTask = document.querySelector("#edit-task");
  const deleteTask = document.querySelector("#delete-task");
  let projectTitleHeader = document.querySelector(".project-title-header");
  let storedListOfProjects = storage();
  let lop = listOfProjects();
  // let iTask = {
  //   title: "odin1",
  //   description: "to do list",
  // };

  // let jTask = {
  //   title: "odin2",
  //   description: "to do list",
  // };

  // lop.getProjectByName("Project 1").setProjectTasks(task(iTask));
  // lop.getProjectByName("Project 1").setProjectTasks(task(jTask));

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

    let templop = storedListOfProjects.getListOfProjects();
    let prjtList = templop.getProjects();
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
      editEl.addEventListener("click", projectEditFormEventListener(editEl, titleEl));
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
    
        
      let taskTitleEl = document.createElement("p");
      taskTitleEl.innerText = task.getTaskTitle();
      
      let descriptionEl = document.createElement("p");
      descriptionEl.innerText = task.getTaskDescription();
      
      let dueDateEl = document.createElement("p");
      dueDateEl.innerText = task.getDueDate();
      
      let importanceEl = document.createElement("p");
      importanceEl.innerText = task.getImportance();

      let editEl = document.createElement("i");
      editEl.className = "fa-solid fa-ellipsis-vertical task-edit";
      let statusEl = document.createElement("p");
      statusEl.innerText = task.getStatus();
      taskEl.appendChild(statusEl);
      taskEl.appendChild(taskTitleEl);
      taskEl.appendChild(descriptionEl);
      taskEl.appendChild(dueDateEl);
      taskEl.appendChild(importanceEl);
      taskEl.appendChild(editEl);
      //add event listener to task 3 dot icon element, when clicked call task edit form
      editEl.addEventListener("click", taskEditFormEventListener(editEl, taskTitleEl));
      taskContainer.appendChild(taskEl);

      
    //   editEl.addEventListener("click", (e) => {
    //     taskEditFormEventListener(editEl);
    //   });
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
      //lop.setProject(title);
      storedListOfProjects.saveProject(title) ;
      //display updated projects list
      displayProjects();
      projectForm.classList.toggle("visible");
    });

    projectForm.addEventListener("reset", (e)=>{
        e.preventDefault();
        projectForm.classList.toggle("visible");
    })
 };

  const renameProjectFormCallBack = (e) => {
    e.preventDefault();
    let selectedProjectTitle = document.querySelector(
       "#data-selected-project"
        ).innerText;
    let selectedProject = lop.getProjectByName(selectedProjectTitle);
    let editProjectTitle = document.getElementById("edit-project-title");

    //when edit is clicked, form has to be prepopulated with already existing data.
    editProjectTitle.placeholder = selectedProjectTitle;
    selectedProject.setProjectTitle(editProjectTitle.value);
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

  const resetProjectEditFormCallBack = () => {
    editProjectForm.classList.toggle("visible");
  };
  //add event listener to edit project form and handle the same
  const projectEditFormEventListener = (editEl, titleEl) => {

    let editProjectTitle = document.getElementById("edit-project-title");
    //display edit and delete buttons
    editEl.addEventListener("click", ()=> {
        editProjectForm.classList.toggle("visible");
        editProjectTitle.value = titleEl.innerText;
    });

    //when edit clicked, call setProjectTitle function
    renameProject.addEventListener("click", renameProjectFormCallBack);

    //when delete is clicked, call delete function (deleteProject)
    deleteProject.addEventListener("click", deleteProjectFormCallBack);
    editProjectForm.removeEventListener("reset", resetProjectEditFormCallBack);
    editProjectForm.addEventListener("reset", resetProjectEditFormCallBack);
  };

  const taskFormCallback = (e) => {
    e.preventDefault();
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const dueDate = document.getElementById("due-date").value;
    const important = document.getElementById("important").checked;
    const status = document.getElementById("status").checked;
    const tempTask = task({ title, description, dueDate, important,status });
    let selectedProjectTitle = document.querySelector(
      "#data-selected-project"
    ).innerText;
    let selectedProject = lop.getProjectByName(selectedProjectTitle);
      selectedProject.setProjectTasks(tempTask);
      displayTasks(selectedProject);
      
      taskForm.reset();
      
      taskForm.classList.toggle("visible");
  };

  //add event listener to task-addition form and handle the same
  const taskFormEventListener = () => {

    // Remove any existing event listeners for the task form
    taskForm.removeEventListener("submit", taskFormCallback);
    // Add new event listener for task form submission
    taskForm.addEventListener("submit", taskFormCallback);

    taskForm.addEventListener("reset", ()=> {
        taskForm.classList.toggle("visible");
    })
    
  };

  const editTaskFormCallBack = (e) => {
    
    e.preventDefault();
    
    const title = document.getElementById("edit-task-title").value;
    const description = document.getElementById("edit-task-description").value;
    const dueDate = document.getElementById("edit-due-date").value || "no due date";
    const important = document.getElementById("edit-important").checked;
    const status = document.getElementById("edit-status").checked;
    let selectedProjectTitle = document.querySelector(
        "#data-selected-project"
      ).innerText;
    let selectedTaskTitle = document.querySelector(
        "#data-selected-task"
      ).innerText;
    let selectedTask = lop.getProjectByName(selectedProjectTitle).getTaskByName(selectedTaskTitle);
    
    selectedTask.setTaskDescription(description);
    selectedTask.setTaskTitle(title);
    selectedTask.setDueDate(dueDate);
    selectedTask.setImportance(important);
    selectedTask.setStatus(status);
    
    displayTasks(lop.getProjectByName(selectedProjectTitle));
    editTaskForm.reset();
  };

  const deleteTaskFormCallBack = (e) => {
    e.preventDefault();
    let selectedProjectTitle = document.querySelector(
        "#data-selected-project"
      ).innerText;
    let selectedTaskTitle = document.querySelector(
        "#data-selected-task"
      ).innerText;
    let selectedTask = lop.getProjectByName(selectedProjectTitle).getTaskByName(selectedTaskTitle);

    lop.getProjectByName(selectedProjectTitle).deleteTask(selectedTask);
    displayTasks(lop.getProjectByName(selectedProjectTitle));
    editTaskForm.classList.toggle("visible");
  };

  const resetTaskEditFormCallBack = () => {
        editTaskForm.classList.toggle("visible");
  };
  //add event listener to edit task form and handle the same
  const taskEditFormEventListener = (editEl, taskTitleEl) => {

    //display edit and delete buttons
    editEl.addEventListener("click", ()=> {
        editTaskForm.classList.toggle("visible");
        let temp = document.querySelector("#data-selected-task");
        if (temp) {
          temp.removeAttribute("id");
        } 
        taskTitleEl.setAttribute("id", "data-selected-task");

        //display task form and populate with already existing data
        let selectedProjectTitle = document.querySelector(
            "#data-selected-project"
          ).innerText;

        let title = document.getElementById("edit-task-title");
        let description = document.getElementById("edit-task-description");
        let dueDate = document.getElementById("edit-due-date");
        let important = document.getElementById("edit-important");
        let status = document.getElementById("edit-status");

        let tempTask = lop.getProjectByName(selectedProjectTitle).getTaskByName(taskTitleEl.innerText);
        title.value = tempTask.getTaskTitle();
        description.value = tempTask.getTaskDescription();
        dueDate.value = tempTask.getDueDate();
        important.checked = tempTask.getImportance();
        status.checked = tempTask.getStatus();
    });
    
    //when edit clicked, call setProjectTitle function
    editTask.removeEventListener("click", editTaskFormCallBack);
    //when edit clicked, call setProjectTitle function
    editTask.addEventListener("click", editTaskFormCallBack);

    deleteTask.removeEventListener("click", deleteTaskFormCallBack);
    //when delete is clicked, call delete function (deleteProject)
    deleteTask.addEventListener("click", deleteTaskFormCallBack);

    editTaskForm.removeEventListener("reset",resetTaskEditFormCallBack);
    editTaskForm.addEventListener("reset",resetTaskEditFormCallBack);
    
  };
  return { display };
};

export { Dom };
