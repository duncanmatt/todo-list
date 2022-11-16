import _ from "lodash";
import "./styles.css";

// date at the top
const greeting = document.getElementById('greeting');

// grab the form for inputting new task data
const taskForm = document.getElementById('task-form');
const taskTitle = document.getElementById('task-title-input');
const taskInfo = document.getElementById('task-info-input');

// UL for each project to append new task li
const proj1List = document.getElementById('proj1-list');
const proj2List = document.getElementById('proj2-list');
const proj3List = document.getElementById('proj3-list');

let tasks = new Map();

// *** CLASSES THEN STORE IN LOCALSTORAGE ***
class Task {
  constructor(name, info) {
    this.name = name;
    this.info = info;
  }
}


// --logic--
addTask();
function addTask() {
  taskForm.onsubmit = (e) => {
    e.preventDefault();
    const newTask = new Task(taskTitle.value, taskInfo.value);
    tasks[newTask.name] = newTask.info;
    console.log(tasks);
  }
  

}


// --DOM--
function getDate() {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let year = today.getFullYear();
  today = month + '/' + day + '/' + year;
  greeting.textContent = today;
}
getDate();
