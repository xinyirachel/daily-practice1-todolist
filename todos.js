let input = prompt("what would you like to do?");
const todos = ["Task 1 one the list", "Task 2 on the list"];
while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*******************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i}: ${todos[i]}`);
    }
    console.log("*******************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todos.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = prompt("Ok, enter an index to delete:");
    const indexNumber = parseInt(index);
    if (!Number.isNaN(indexNumber)) {
      const deleted = todos.splice(indexNumber, 1);
      console.log(`Delete${deleted}`);
    } else {
      console.log("Unknown index");
    }
  }
  input = prompt("what would you like to do?");
}
console.log("YOU QUIT THE APP");

//8:09 store todo
