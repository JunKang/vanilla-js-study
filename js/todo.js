const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.querySelector("#todo-list");

const TODO_LIST_KEY = "toDoList";

let toDoArray = [];

function storeToDoList() {
  localStorage.setItem(TODO_LIST_KEY, JSON.stringify(toDoArray));
}

function loadToDoList() {
  const savedToDoList = localStorage.getItem(TODO_LIST_KEY);

  // Restore
  if (savedToDoList !== null) {
    const parsedToDoList = JSON.parse(savedToDoList);
    toDoArray = parsedToDoList;
    parsedToDoList.forEach((toDoObj) => paintToDo(toDoObj));
  }
}

function paintToDo(newToDoObj) {
  const li = document.createElement("li");
  li.id = newToDoObj.id;
  const span = document.createElement("span");
  span.innerText = newToDoObj.text;
  span.style.marginRight = "10px";

  const button = document.createElement("button");
  button.innerText = "❌";
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function addToDo(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  const newToDoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDoArray.push(newToDoObj);
  paintToDo(newToDoObj);
  storeToDoList();

  toDoInput.value = "";
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  toDoArray = toDoArray.filter((toDo) => toDo.id != li.id);
  storeToDoList();
  li.remove();
}

toDoForm.addEventListener("submit", addToDo);
loadToDoList();
