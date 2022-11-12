import _ from "lodash";
import "./styles.css";

const greeting = document.getElementById('greeting');

const proj1Form = document.getElementById('proj1-form');
const proj1List = document.getElementById('proj1-list');
let proj1Tasks = [];

// localStorage.setItem(new Task(title.value, desc.value);
// --logic--

addTask();
function addTask() {
  proj1Form.onsubmit = (e) => {
    e.preventDefault();
    const task = new FormData(e.target);
    const newTask = Object.fromEntries(task.entries());
    proj1Tasks.push(newTask);
    console.log(proj1Tasks);
    proj1Form.reset();
    createList();
  }
  
}

function createList() {
  for(let task of proj1Tasks) {
    for(let prop of task) {
      const newItem = document.createElement('li');
      proj1List.appendChild(newItem)
    
      const itemInfo = document.createElement('p');
      itemInfo.textContent = prop;
      newItem.appendChild(itemInfo);
    }
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
