"use strict";

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Task = /*#__PURE__*/_createClass(function Task() {
  _classCallCheck(this, Task);

  _defineProperty(this, "title", void 0);

  _defineProperty(this, "isCompleted", void 0);
}); // tableau de Task


var tasks = []; // lorsqu'on soumet le formulaire, on ajoute un <li> au <ul> avec le texte saisi

var formElt = document.querySelector("form#add-form");
var inputElt = formElt.querySelector("input[name=taskName]");
var tasksElt = document.querySelector("ul#tasks");
var TASK_STORAGE_KEY = "tasks";

function saveTasks() {
  var tasksStr = JSON.stringify(tasks);
  localStorage.setItem(TASK_STORAGE_KEY, tasksStr);
}

function loadTasks() {
  var tasksStr = localStorage.getItem(TASK_STORAGE_KEY); // pas encore de taches sauvegardée

  if (tasksStr == null) {
    tasks = [];
  } else {
    tasks = JSON.parse(tasksStr);
  }

  refreshTaskList();
}

function refreshTaskList() {
  // on vide la liste exitante
  tasksElt.innerHTML = "";
  tasks.forEach(function (task) {
    var newLi = createTaskLi(task);
    tasksElt.appendChild(newLi);
  });
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

function createTaskLi(task) {
  var taskLi = document.createElement("li");
  var statusText = task.isCompleted ? "V" : "X";
  taskLi.innerHTML = statusText + " " + task.title;
  if (task.isCompleted) taskLi.style.color = "green"; // un clic sur un li change le statut completed de la tache

  taskLi.addEventListener("click", function () {
    changeTaskCompletion(task);
  });
  return taskLi;
}

function addTask(taskTitle) {
  var newTask = {
    title: taskTitle,
    isCompleted: false
  };
  tasks.push(newTask);
  onDataUpdate();
}

formElt.addEventListener("submit", function (event) {
  event.preventDefault();
  var newTaskTitle = inputElt.value;
  addTask(newTaskTitle); // on vide le input

  inputElt.value = "";
});
onAppLaunch();
//# sourceMappingURL=script.js.map