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

// project cards
const proj1 = document.getElementById('proj1');
const proj2 = document.getElementById('proj2');
const proj3 = document.getElementById('proj3');

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
  if (document.getElementById('ff-select').checked) {
    proj1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj2.style.boxShadow = '0 10px 20px var(--mid), 0 6px 6px var(--mid)';
    proj3.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
  }
  if(document.getElementById('ttt-select').checked) {
    proj1.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj2.style.boxShadow = '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)';
    proj3.style.boxShadow = '0 10px 20px var(--mid), 0 6px 6px var(--mid)';
  }
}

projSelectors.forEach((selector) => {
  selector.addEventListener('click', () => {
    formFeedback();
  });
});

//--Logic--
// *** CLASSES THEN STORE IN LOCALSTORAGE ***
class Task {
  constructor(title, info) {
    this.title = title;
    this.info = info;
  }
}

class HashTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }

  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }
  set(key, val) {
    let index = this._hash(key);
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
  }
  get(key) {
    let index = this._hash(key);
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++){
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1];
        }
      }
    }
    return undefined;
  }
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if(!valuesArr.includes(this.keyMap[i][j][1])) {
            valuesArr.push(this.keyMap[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.keyMap.length; i++) {
      if (this.keyMap[i]) {
        for (let j = 0; j < this.keyMap[i].length; j++) {
          if(!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}

let proj1Tasks = new HashTable();
let proj2Tasks = new HashTable();
let proj3Tasks = new HashTable();

function createProj1Items() {
  let itemTitles = proj1Tasks.keys();
  let itemInfo = proj1Tasks.values();
  
  for(let title of itemTitles) {
    itemInfo.forEach((content) => {
      let item = document.createElement('li');
      item.innerHTML = `<h4>${title}</h4>
                        <p>${content}</p>`;
      item.classList.add('item');
      proj1List.appendChild(item);
    });
  }
  
}

function createProj2Items() {
  let itemTitles = proj2Tasks.keys();
  let itemInfo = proj2Tasks.values();

  for(let title of itemTitles) {
    itemInfo.forEach((content) => {
      let item = document.createElement('li');
      item.innerHTML = `<h4>${title}</h4>
                        <p>${content}</p>`;
      item.classList.add('item');
      proj2List.appendChild(item);
    });
  }
}

function createProj3Items() {
  let itemTitles = proj3Tasks.keys();
  let itemInfo = proj3Tasks.values();

  for(let title of itemTitles) {
    itemInfo.forEach((content) => {
      let item = document.createElement('li');
      item.innerHTML = `<h4>${title}</h4>
                        <p>${content}</p>`;
      item.classList.add('item');
      proj3List.appendChild(item);
    });
  }
}

addTask();
function addTask() {
  taskForm.onsubmit = (e) => {
    e.preventDefault();
    const newTask = new Task(taskTitle.value, taskInfo.value);

    if (document.getElementById('pw-select').checked) {
      proj1Tasks.set(newTask.title, newTask.info);
      localStorage.setItem('taskItems1', JSON.stringify(proj1List));
      createProj1Items();
      taskForm.reset();
    } 
    else if(document.getElementById('ff-select').checked) {
      proj2Tasks.set(newTask.title, newTask.info);
      localStorage.setItem('taskItems2', JSON.stringify(proj2List));
      createProj2Items();
      taskForm.reset();
    }
    else if(document.getElementById('ttt-select').checked) {
      proj3Tasks.set(newTask.title, newTask.info);
      localStorage.setItem('taskItems3', JSON.stringify(proj3List));
      createProj3Items();
      taskForm.reset();
    } else {
      console.log('TASK DID NOT SUBMIT');
    }
  }
}








