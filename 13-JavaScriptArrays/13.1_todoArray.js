window.setTimeout(function() {

var todos = ["Buy new houseplant"];

var input = prompt("What would you like to do?");

while(input !== "quit") {
    if(input === "list") {
        listTodos();
    }   
    else if(input === "new") {
        addTodo();
    }
    else if(input === "delete") {
        deleteTodo();
    }

    input = prompt("What would you like to do?");
}
console.log("OK, you quit the app!");

// list - List All Todos
function listTodos() {
    console.log("--------------------")
    todos.forEach(function(todo, i) {
        console.log(i + ": " + todo);
    });
    console.log("--------------------")
}

// new - Add A Todo
function addTodo() {
    var newTodo = prompt("Enter new todo"); 
    todos.push(newTodo);
    console.log("Added todo: " + newTodo);
}

// delete - Remove Specific Todo
function deleteTodo() {
    var index = prompt("Enter index of todo to delete");
    todos.splice(index, 1);
    console.log("Deleted todo");
}

}, 500);