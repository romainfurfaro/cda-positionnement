document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add");
  const input = document.getElementById("input");
  const tasksList = document.getElementById("taskList");
  const counter = document.getElementById("count");

  addBtn.addEventListener("click", function () {
    let newTask = input.value;
    if (newTask) {
      let newTaskItem = document.createElement("li");
      newTaskItem.innerHTML = input.value;
      tasksList.appendChild(newTaskItem);
      counter.innerHTML++;
      input.value = "";
      newTaskItem.addEventListener("click", function () {
        newTaskItem.classList.add("taskDone");
      });

      let deleteItemBtn = document.createElement("button");
      newTaskItem.appendChild(deleteItemBtn);
      deleteItemBtn.classList.add("deleteBtn");
      deleteItemBtn.innerHTML = "Supprimer";
      deleteItemBtn.addEventListener("click", function () {
        tasksList.removeChild(newTaskItem);
        counter.innerHTML--;
      });
    }
  });
});
