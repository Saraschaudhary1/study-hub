const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();
 if (!text) {
  taskInput.placeholder = "Please enter a task first...";
  return;
}

  const li = document.createElement("li");
  li.textContent = text;
  taskList.appendChild(li);
  taskInput.value = "";
  li.addEventListener("click", () => {
  li.remove();

  console.log("Study Hub tasks ready");
});
});