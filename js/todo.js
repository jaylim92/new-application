const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todoes";

let toDoes = [];

function saveToDoes() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDoes));
}

function deletToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDoes = toDoes.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDoes();
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.className = "do-thing";
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.className = "delete";
  button.innerText = "❌";
  button.addEventListener("click", deletToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newToDoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDoes.push(newToDoObj);
  paintToDo(newToDoObj);
  saveToDoes();
}

toDoFrom.addEventListener("submit", handleToDoSubmit);

const savedToDoes = localStorage.getItem(TODOS_KEY);

if (savedToDoes !== null) {
  const parsedToDoes = JSON.parse(savedToDoes);
  toDoes = parsedToDoes;
  parsedToDoes.forEach(paintToDo);
}
