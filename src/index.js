import _ from "lodash";
import "./styles.css";

class Task {
  constructor(title, desc, deadline, priority, duration) {
    this.title = title;
    this.desc = desc;
    this.deadline = deadline;
    this.priority = priority;
    this.duration = duration;
  }
}

function contentCreation() {
  const container = document.createElement('div');
  container.classList.add('container');

  const topText = document.createElement('h1');
  topText.innerHTML = 'Digital Agenda';
  container.appendChild(topText);


  return container;
}

document.body.appendChild(contentCreation());
