//picking the selectors to be available in our javascript
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList =document.querySelector(".todo-list");
const filterOption =document.querySelector(".filter-todo");
//Add event listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click" , filterTodo);
//create function that would create to do 
function addTodo(event) {
//prevent the form (input type) from submitting 
event.preventDefault();
//create todo Div 
const todoDiv = document.createElement("div");
todoDiv.classList.add("todo");
//create Li
const newTodo = document.createElement("li");
newTodo.innerText = todoInput.value;
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//CHECK MARK BUTTON
const completedButton = document.createElement('button');
completedButton.innerHTML= '<i class = "fas fa-check">';
completedButton.classList.add("complete-btn");
todoDiv.appendChild(completedButton);

//check trash button
const trashButton = document.createElement("button");
trashButton.innerHTML = '<i class = "fas fa-trash">';
trashButton.classList.add("trash-btn");
todoDiv.appendChild(trashButton);

//Append to the list
todoList.appendChild(todoDiv);
}
//clear the todo input value
todoInput.value = "";
 
function deleteCheck(e) {
const item = e.target;
//delete the todo button by clicking the trash btn
if (item.classList[0] === "trash-btn") {
const todo = item.parentElement;
todo.classList.add("fall");
todo.addEventListener("transitionend", function () {
 todo.remove();
});
}
 
//Checkmark Area
 if(item.classList[0] === "complete-btn") {
const todo = item.parentElement;
todo.classList.toggle("completed");
 }
}
function filterTodo(e) {
const todos = todoList.childNodes;
todos.forEach(function(todo) {
    switch(e.target.value) {
    case "all":
    todo.style.display = "flex";
    break;
    case"completed":
    if (todo.classList.contains("completed")) {
      todo.style.display ="flex";
    }else{
    todo.style.display ="none";
    }
    break;
    case "uncompleted":
    if(!todo.classList.contains("completed")) {
    todo.style.display ="flex";
    }else{
    todo.style.display ="none";
    }
    break;
}
});
}








