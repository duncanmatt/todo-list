import _ from "lodash";
import "./styles.css";

const greeting = document.getElementById('greeting');

const proj1Form = document.getElementById('proj1-form');
const proj1List = document.getElementById('proj1-list');
const titleInput1 = document.getElementById('proj1-title-input');
const infoInput1 = document.getElementById('proj1-info-input');
let proj1Tasks = [];

// localStorage.setItem(new Task(title.value, desc.value);
// --logic--
class Task {
  constructor(title, info) {
    this.title = title;
    this.info = info;
  }
}

addTask();
function addTask() {
  proj1Form.onsubmit = (e) => {
    e.preventDefault();
    const task = new FormData(e.target);
    const newTask = Object.fromEntries(task.entries());
    proj1Tasks.push(newTask);
    
    const newItem = document.createElement('li');
    newItem.innerHTML = `<p>${titleInput1.value}<br>${infoInput1.value}</p>`;
    proj1List.appendChild(newItem);
    proj1Form.reset();
  }
  
}

function createList() {
  for(const item of proj1Tasks) {
    
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
