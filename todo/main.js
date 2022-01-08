const btnAddTask = document.querySelector('.add-task');
const btnAddTask = document.querySelector('.remove-task');
const app = document.querySelector('.app');

const addTask = () =>{
   const newTask = document.createElement('div');
   newTask.className = "task";
   app.appendChild(newTask);
   const newInput = document.createElement('input');
   newInput.className = "task__input";
   newTask.appendChild(newInput);
   const newCheckbox = document.createElement('input');
   newCheckbox.type = "checkbox";
   newCheckbox.className = "task__checkbox";
   newTask.appendChild(newCheckbox);
}
const removeTask = () =>{
    
}

btnAddTask.addEventListener("click", addTask)
btnRemoveTask.addEventListener("click", removeTask)