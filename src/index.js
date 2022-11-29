import _ from "lodash";
import "./styles.css";

class Task {
  constructor(key, val) {
    this.key = key;
    this.val = val
  }
  toString() {
    return '[' + this.key + ' - ' + this.val + ']';
  }
}

class TaskTable {
  constructor(size=53) {
    this.keyMap = new Array(size);
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) + 96;
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
      for (let i = 0; i < this.keyMap[index].length; i++) {
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
          if (!valuesArr.includes(this.keyMap[i][j][1])) {
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
          if (!keysArr.includes(this.keyMap[i][j][0])) {
            keysArr.push(this.keyMap[i][j][0]);
          }
        }
      }
    }
    return keysArr;
  }
}
let taskStorage = new TaskTable();

window.addEventListener('load', () => {
  updateStorage();
  createTaskItems();
  removeTask();  
});

// push every key and value from local storage into datastruct
function updateStorage() {
  for (const [key, value] of Object.entries(localStorage)) {
    taskStorage.set(`${key}`, JSON.parse(value));
  }
  console.log(taskStorage);
}

// adding tasks to localstorage
const taskForm = document.getElementById('task-form');
taskForm.onsubmit = (e) => {
  e.preventDefault();
  addTask();
}



function addTask() {
  const taskKey = document.getElementById('task-key-input');
  const taskVal = document.getElementById('task-val-input');
  
  if (document.getElementById('pw-select').checked) {
    localStorage.setItem(taskKey.value, JSON.stringify(taskVal.value));
    createItem(taskKey.value, taskVal.value);
    taskForm.reset();
  } 
  else if(document.getElementById('ff-select').checked) {
    localStorage.setItem(taskKey.value, JSON.stringify(taskVal.value));
    createItem(taskKey.value, taskVal.value);
    taskForm.reset();
  }
  else if(document.getElementById('ttt-select').checked) {
    localStorage.setItem(taskKey.value, JSON.stringify(taskVal.value));
    createItem(taskKey.value, taskVal.value);
    taskForm.reset();
  } else {
    formFeedback();
    console.log('TASK DID NOT SUBMIT');
  }
  updateStorage();
}
function createItem(key, val) {
  const taskList = document.querySelector('.task-list');
  const newItem = document.createElement('li');
    newItem.innerHTML = `
                          <div class="wrapper">
                            <h4>${key}</h4>
                            <div role="button" class="del">
                              <i class="fa-solid fa-trash"
                              class="del-btn"></i>
                            </div>
                            <h6>${val}</h6>
                        </div>
                        `;
    newItem.classList.add('item');
    taskList.appendChild(newItem); 
}

// create ui items from storage list
function createTaskItems() {
  const taskList = document.querySelector('.task-list');
  let storage = taskStorage.keys();
  for (const key of storage) {
    const newTask = new Task(key, taskStorage.get(key));
    const newWrapper = document.createElement('div');
    newWrapper.innerHTML = `<h4>${newTask.key}</h4>
                              <div role="button" class="del">
                               <i class="fa-solid fa-trash"></i>
                              </div>
                            <h6>${newTask.val}</h6>
                            
                        `;
    newWrapper.classList.add('wrapper');
    taskList.appendChild(newWrapper); 
  }
}

// click on trash can to remove corresponding task
function removeTask() {
  const taskList = document.querySelector('.task-list');
  let trashCans = document.querySelectorAll('.del');
  trashCans.forEach((can) => {
    can.addEventListener('click', () => {
      taskList.removeChild(can.parentElement);
    });
  });
}
  
// display the current date at the top 
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

const projSelectors = document.querySelectorAll('[name=project]');
projSelectors.forEach((selector) => {
  selector.addEventListener('click', () => {
    formFeedback();
  });
});











