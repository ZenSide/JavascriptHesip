
const tasks = [];

class Task {
    title;
    isCompleted;
}

function addTask(nom) {

    const newTask = {
        title: nom,
        isCompleted: false
    }

    tasks.push(newTask);

    inputElt.value = "";

    displayTaskList();
}

const taskListElt = document.querySelector("ul#tasks");
function displayTaskList(){

    taskListElt.innerHTML = "";
    tasks.forEach(task=>{
        const newLi = document.createElement("li");
        let iconElt = ""
        if (task.isCompleted){
            iconElt = '<i class="bi bi-check-square"></i>';
        }
        else {
            iconElt = '<i class="bi bi-square"></i>';
        }
        newLi.innerHTML = iconElt + " " + task.title;
        newLi.classList.add("list-group-item");

        newLi.addEventListener("click", ()=>{
            task.isCompleted = !task.isCompleted;
            displayTaskList();
        })

        taskListElt.appendChild(newLi);
    })
}

const form = document.querySelector("form#add-form");
const inputElt = document.querySelector("form#add-form input[name=taskName]");
form.addEventListener("submit", (event)=>{
    event.preventDefault();

    const inputTitle = inputElt.value;
    if (inputTitle.length==0) return;

    addTask(inputTitle);
})
