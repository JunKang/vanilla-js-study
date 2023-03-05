const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const toDoDiv = document.querySelector("#todo-div");

const HIDDEN_CLASSNAME = "hidden";
const KEY_USERNAME = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(KEY_USERNAME, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Welcome ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  toDoDiv.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(KEY_USERNAME);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
} else {
  paintGreetings(savedUsername);
}

loginForm.addEventListener("submit", onLoginSubmit);
