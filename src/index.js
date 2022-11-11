import _ from "lodash";
import "./styles.css";

// --DOM--
const container = document.getElementById('container');
const projects = document.querySelectorAll('.proj');
const greeting = document.getElementById('greeting');
const lists = document.querySelectorAll('.task-list');
const list1 = document.getElementById('proj1-list');
const list2 = document.getElementById('proj2-list');
const list3 = document.getElementById('proj3-list');

function getDate() {
  let today = new Date();
  let day = String(today.getDate()).padStart(2, '0');
  let month = String(today.getMonth() + 1).padStart(2, '0');
  let year = today.getFullYear();

  today = month + '/' + day + '/' + year;
  greeting.textContent = today;
}
getDate();






// --logic--
class Task {
  constructor(title, desc, deadline, priority, duration) {
    this.title = title;
    this.desc = desc;
    this.deadline = deadline;
    this.priority = priority;
    this.duration = duration;
  }
}

const test = new Task('hello', 'dsjhaa', 'adshjfhk', 'aljlak', 'jad');
console.log(test);
