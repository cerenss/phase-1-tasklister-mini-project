document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const submitBtn = document.querySelector("input[type=submit]");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const task = document.querySelector("#new-task-description").value;
    const taskList = document.querySelector("#tasks");
    const newTask = document.createElement("textarea");
    newTask.innerText = `${task}  `;
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "X";
    const toDoItemContainer = document.createElement("div");
    toDoItemContainer.id = "to-do-item-container";
    toDoItemContainer.appendChild(newTask);
    toDoItemContainer.appendChild(deleteBtn);
    taskList.appendChild(toDoItemContainer);

    deleteBtn.addEventListener("click", (e) => {
      e.target.parentNode.remove();
    });

    const form = document.querySelector("#create-task-form");
    form.reset();
    
  })
  
});
