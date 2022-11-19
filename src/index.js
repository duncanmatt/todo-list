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
// *** CLASSES THEN STORE IN LOCALSTORAGE ***
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class TaskList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(task){
    var newTask = new Node(task);
    if(!this.head){
        this.head = newTask;
        this.tail = this.head;
    } else {
        this.tail.next = newTask;
        this.tail = newTask;
    }
    this.length++;
    return this;
  }
  pop(){
    if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while(current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;
  }
}

let proj1Tasks = new TaskList();
let proj2Tasks = new TaskList();
let proj3Tasks = new TaskList();



addTask();
function addTask() {
  taskForm.onsubmit = (e) => {
    e.preventDefault();
   

    if (document.getElementById('pw-select').checked) {
      proj1Tasks.push(taskTitle.value);
      localStorage.setItem('task1Items', JSON.stringify(proj1Tasks));
      let taskItems = JSON.parse(localStorage.getItem('task1Items'));
         
      console.log(taskItems);
      taskForm.reset();
    } 
    else if(document.getElementById('ff-select').checked) {
      proj2Tasks.set(newTask.title, newTask.info);
      
      taskForm.reset();
    }
    else if(document.getElementById('ttt-select').checked) {
      proj3Tasks.set(newTask.title, newTask.info);
  
      taskForm.reset();

    } else {
      formFeedback();
      console.log('TASK DID NOT SUBMIT');
    }
  }
}








