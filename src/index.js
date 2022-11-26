import _ from "lodash";
import "./styles.css";

class Task {
  constructor(title, info) {
    this.title = title;
    this.info = info;
  }
  // store()
}

window.addEventListener('load', () => {
  createTaskItems();
});

const taskForm = document.getElementById('task-form');
taskForm.onsubmit = (e) => {
  e.preventDefault();
  addTask();
}

function addTask() {
  const taskTitle = document.getElementById('task-title-input');
  const taskInfo = document.getElementById('task-info-input');
  let newTask = new Task(taskTitle.value, taskInfo.value);

  if (document.getElementById('pw-select').checked) {
    localStorage.setItem(newTask.title, JSON.stringify(newTask.info));
    taskForm.reset();
  } 
  else if(document.getElementById('ff-select').checked) {
    localStorage.setItem(newTask.title, JSON.stringify(newTask.info));
    taskForm.reset();
  }
  else if(document.getElementById('ttt-select').checked) {
    localStorage.setItem(newTask.title, JSON.stringify(newTask.info));
    taskForm.reset();
  } else {
    formFeedback();
    console.log('TASK DID NOT SUBMIT');
  }
}

function createTaskItems() {
  const taskList = document.querySelector('.task-list');
  for (let i = 0; i < localStorage.length; i++) {
    let taskKey = localStorage.key(i);
    let taskContent = JSON.parse(
      localStorage.getItem(taskKey));
    let newItem = document.createElement('li');
    newItem.innerHTML = `
                          <h4>${taskKey}</h4>
                          <h6>${taskContent}</h6>
                        `;
    taskList.appendChild(newItem);
    newItem.classList.add('item');
  }
}

function getDate() {
  const greeting = document.getElementById('greeting');
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
    proj1.style.boxShadow = '0 10px 20px var(--lighter), 0 6px 6px var(--mid)';
    proj2.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj3.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
  }
  else if (document.getElementById('ff-select').checked) {
    proj1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj2.style.boxShadow = '0 10px 20px var(--lighter), 0 6px 6px var(--mid)';
    proj3.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
  }
  else if(document.getElementById('ttt-select').checked) {
    proj1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj2.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj3.style.boxShadow = '0 10px 20px var(--lighter), 0 6px 6px var(--mid)';
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









