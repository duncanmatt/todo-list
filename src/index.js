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

// --DOM--
const container = document.getElementById('container');
function contentCreation() {
  container.innerHTML =`<h1>Date</h1>
                        <section>
                          <h2>Today's Objectives</h2>
                        </section>
                          `


  return container;
}

document.body.appendChild(contentCreation());
