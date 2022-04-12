class Task {
    title;
    isCompleted;
}
// tableau de Task
const tasks = [];

// lorsqu'on soumet le formulaire, on ajoute un <li> au <ul> avec le texte saisi
const formElt = document.querySelector("form#add-form");
const inputElt = formElt.querySelector("input[name=taskName]");

const tasksElt = document.querySelector("ul#tasks");

function refreshTaskList() {
    // on vide la liste exitante
    tasksElt.innerHTML = "";

    tasks.forEach(task=>{
        const newLi = createTaskLi(task);
        tasksElt.appendChild(newLi);
    })
}

function createTaskLi(task){
    const taskLi = document.createElement("li");
    const statusText = task.isCompleted ? "V" : "X";
    taskLi.innerHTML = statusText + " " + task.title;

    // un clic sur un li change le statut completed de la tache
    taskLi.addEventListener("click", ()=>{
        task.isCompleted = !task.isCompleted;
        refreshTaskList();
    })

    return taskLi;
}

formElt.addEventListener("submit", (event) => {
    event.preventDefault();

    const newTaskTitle = inputElt.value;
    const newTask = {
        title: newTaskTitle,
        isCompleted: false
    };
    tasks.push(newTask);

    // on vide le input
    inputElt.value = "";

    refreshTaskList();
})
