import _ from "lodash";
import "./styles.css";

const greeting = document.getElementById('greeting');

const proj1Form = document.getElementById('proj1-form');
const proj1List = document.getElementById('proj1-list');
const titleInput1 = document.getElementById('proj1-title-input');
const infoInput1 = document.getElementById('proj1-info-input');

let proj1Tasks = [
  'create two more projects',
  'improve UI/UX',
  'figure out hosting',
];
const proj1TaskItems = [];

let dragStartIndex;

createTasks();
function createTasks() {
  [...proj1Tasks]
    .forEach((task, index) => {
      const listItem = document.createElement('li');

      listItem.setAttribute('data-priority', index);

      listItem.innerHTML = `
        <span class="number">Priority: ${index+1}</span>
        <div class="draggable" draggable="true">
          <p class="task-name">${task}</p>
          <i class="fa-solid fa-trash"></i>
        </div>
      `;

      proj1TaskItems.push(listItem);

      proj1List.appendChild(listItem);
    });

}













































































// --logic--

/*
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
*/

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
