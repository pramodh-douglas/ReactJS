let form = document.getElementById("addForm");
let ul = document.getElementById("tasks");

// add submit event listener
form.addEventListener("submit", addTask);

// add delete event listener
ul.addEventListener("click", deleteTask);

// add new task
function addTask(event) {
    event.preventDefault();

    let newTask = document.getElementById("task").value;

    let li = document.createElement("li");
    li.className = "list-group-item";
    li.innerHTML = `${newTask} <button class="btn btn-danger btn-sm float-right delete">X</button></li>`

    ul.appendChild(li);

    document.getElementById("task").value = "";
}

// delete task
function deleteTask(event) {
    if (event.target.classList.contains("delete")) {
        ul.removeChild(event.target.parentElement);
    }
}