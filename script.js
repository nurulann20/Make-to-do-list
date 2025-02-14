var addButton = document.getElementById("addButton");
addButton.addEventListener("click", addToDoItem);

var toDoEntryBox = document.getElementById("ltdAdd");
var toDoList = document.getElementById("ltdMain");

function addToDoItem() {
    var itemText = toDoEntryBox.value;
    newToDoItem(itemText, false);
}

function newToDoItem(itemText, completed) {
    var toDoItem = document.createElement("li");
    var toDoText = document.createTextNode(itemText);
    toDoItem.appendChild(toDoText);

    if (completed) {
        toDoItem.classList.add("completed");
    }

    toDoList.appendChild(toDoItem); // Menggunakan appendChild dengan benar
    toDoItem.addEventListener("dblclick", toggleToDoItemState);
}

function toggleToDoItemState() {
    if (this.classList.contains("completed")) {
        this.classList.remove("completed");
    } else {
        this.classList.add("completed");
    }
}

function clearCompletedToDoItems() {
    var completedItems = toDoList.getElementsByClassName("completed");

    while (completedItems.length > 0) {
        completedItems.item(0).remove();
    }
}

function emptyList() {
    while (toDoList.firstChild) {
        toDoList.removeChild(toDoList.firstChild);
    }
}

var myArray = [];
myArray.push("Something to store");
myArray.push("Something else to store");
alert(myArray[0]); // Menggunakan kurung siku untuk mengakses elemen array

var toDoInfo = {
    "task": "Things I need to do",
    "completed": false
};

function saveList() {
    var toDos = [];

    for (var i = 0; i < toDoList.children.length; i++) {
        var toDo = toDoList.children.item(i);

        var toDoInfo = {
            "task": toDo.innerText,
            "completed": toDo.classList.contains("completed")
        };

        toDos.push(toDoInfo); // Menggunakan push dengan benar
    }

    localStorage.setItem("toDos", JSON.stringify(toDos)); // "toDos" digunakan dengan huruf besar
    console.log("Masuk kesini ya"); // console.log digunakan dengan benar
}

function loadList() {
    if (localStorage.getItem("toDos") !== null) { // Penggunaan getItem dengan benar
        var toDos = JSON.parse(localStorage.getItem("toDos")); // getItem digunakan dengan benar

        for (var i = 0; i < toDos.length; i++) {
            var toDo = toDos[i];
            newToDoItem(toDo.task, toDo.completed);
        }
    }
}

loadList();
