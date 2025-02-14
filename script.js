function addTodo() {
    let input = document.getElementById("todo-input");
    let list = document.getElementById("todo-list");
    if (input.value.trim() === "") return;
    let li = document.createElement("li");
    li.textContent = input.value;
    li.ondblclick = function() {
        this.classList.toggle("completed");
    };
    list.appendChild(li);
    input.value = "";
}

function markAllDone() {
    document.querySelectorAll("#todo-list li").forEach(li => li.classList.add("completed"));
}

function clearList() {
    document.getElementById("todo-list").innerHTML = "";
}

function saveList() {
    let todos = [];
    document.querySelectorAll("#todo-list li").forEach(li => {
        todos.push({ text: li.textContent, completed: li.classList.contains("completed") });
    });
    localStorage.setItem("todos", JSON.stringify(todos));
    alert("Daftar tersimpan!");
}