class Task {
    title;
    isCompleted;
}
// tableau de Task
let tasks = [];

// lorsqu'on soumet le formulaire, on ajoute un <li> au <ul> avec le texte saisi
const formElt = document.querySelector("form#add-form");
const inputElt = formElt.querySelector("input[name=taskName]");

const tasksElt = document.querySelector("ul#tasks");

const TASK_STORAGE_KEY = "tasks";

function saveTasks(){
    const tasksStr = JSON.stringify(tasks);
    localStorage.setItem(TASK_STORAGE_KEY, tasksStr);
}

function loadTasks(){
    const tasksStr = localStorage.getItem(TASK_STORAGE_KEY);
    // pas encore de taches sauvegardée
    if (tasksStr == null) {
        tasks = [];
    }
    else {
        tasks = JSON.parse(tasksStr);
    }
    refreshTaskList();
}

function refreshTaskList() {
    // on vide la liste exitante
    tasksElt.innerHTML = "";

    tasks.forEach(task=>{
        const newLi = createTaskLi(task);
        tasksElt.appendChild(newLi);
    })
}

function changeTaskCompletion(task) {
    task.isCompleted = !task.isCompleted;
    onDataUpdate();
}

function onDataUpdate() {
    saveTasks();
    refreshTaskList();
}

function onAppLaunch() {
    loadTasks();
}

function createTaskLi(task){
    const taskLi = document.createElement("li");
    const statusText = task.isCompleted ? "V" : "X";
    taskLi.innerHTML = statusText + " " + task.title;

    if (task.isCompleted) taskLi.style.color = "green";

    // un clic sur un li change le statut completed de la tache
    taskLi.addEventListener("click", ()=>{
        changeTaskCompletion(task);
    })

    return taskLi;
}

function addTask(taskTitle) {
    const newTask = {
        title: taskTitle,
        isCompleted: false
    };
    tasks.push(newTask);

    onDataUpdate();
}

formElt.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTaskTitle = inputElt.value;
    addTask(newTaskTitle);
    // on vide le input
    inputElt.value = "";
})

onAppLaunch();
