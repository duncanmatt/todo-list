import _ from "lodash";
import "./styles.css";

// --DOM--
const container = document.getElementById('container');
const projects = document.querySelectorAll('.proj');
const greeting = document.getElementById('greeting');

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


