import _ from "lodash";
import "./styles.css";

// date at the top
const greeting = document.getElementById('greeting');

// UL for each project to append new task li
const proj1List = document.getElementById('proj1-list');
const proj2List = document.getElementById('proj2-list');
const proj3List = document.getElementById('proj3-list');

// project cards
const proj1 = document.getElementById('proj1');
const proj2 = document.getElementById('proj2');
const proj3 = document.getElementById('proj3');

class Task {
  constructor(title, info, listNum) {
    this.title = title;
    this.info = info;
    this.listNum = listNum;
  }
  // store()
}
let taskItems = [];
window.addEventListener('load', () => {
  const taskForm = document.getElementById('task-form');
  const taskTitle = document.getElementById('task-title-input');
  const taskInfo = document.getElementById('task-info-input');
  taskItems = JSON.parse(localStorage.getItem('taskItems')) || [];

  taskForm.onsubmit = (e) => {
    e.preventDefault();
    if (document.getElementById('pw-select').checked) {
      let newTask = new Task(taskTitle.value, taskInfo.value, 1);
      localStorage.setItem(`${taskTitle.value}`, JSON.stringify(newTask));
      taskItems.push(newTask);
      taskForm.reset();
    } 
    else if(document.getElementById('ff-select').checked) {
      let newTask = new Task(taskTitle.value, taskInfo.value, 2);
      localStorage.setItem(`${taskTitle.value}`, JSON.stringify(newTask));
      taskItems.push(newTask);
      taskForm.reset();
    }
    else if(document.getElementById('ttt-select').checked) {
      let newTask = new Task(taskTitle.value, taskInfo.value, 3);
      localStorage.setItem(`${taskTitle.value}`, JSON.stringify(newTask));
      taskItems.push(newTask);
      taskForm.reset();
    } else {
      formFeedback();
      console.log('TASK DID NOT SUBMIT');
    }
    console.log(taskItems);
  }
});
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

// if project input is selected: illuminate corresponding project with border-box
const projSelectors = document.querySelectorAll('[name=project]');

function formFeedback() {
  if (document.getElementById('pw-select').checked) {
    proj1.style.boxShadow = '0 10px 20px var(--mid), 0 6px 6px var(--mid)';
    proj2.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj3.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
  }
  else if (document.getElementById('ff-select').checked) {
    proj1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj2.style.boxShadow = '0 10px 20px var(--mid), 0 6px 6px var(--mid)';
    proj3.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
  }
  else if(document.getElementById('ttt-select').checked) {
    proj1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj2.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj3.style.boxShadow = '0 10px 20px var(--mid), 0 6px 6px var(--mid)';
  }
  else {
    proj1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj2.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj3.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
  }
}

projSelectors.forEach((selector) => {
  selector.addEventListener('click', () => {
    formFeedback();
  });
});

//--Logic--









