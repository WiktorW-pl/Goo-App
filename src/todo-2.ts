interface Task {
    task: HTMLDivElement;
    isDone: HTMLElement;
    priority: HTMLElement;
  }
  
  const addTaskBtn = document.querySelector('.button-add') as HTMLButtonElement;
  const removeTaskBtn = document.querySelector('.button-remove') as HTMLButtonElement;
  const appContainer = document.querySelector('.tasks-container') as HTMLElement;
  const info = document.querySelector('.info') as HTMLElement;
  
  let tasksList: Task[] = [];
  
  const buildTask = () => {
    if (tasksList.length >= 0) {
      info.style.display = 'none';
    }
  
    const taskContainer = document.createElement('div');
    appContainer.appendChild(taskContainer);
    taskContainer.classList.add('task');
    taskContainer.classList.add('draggable');
    taskContainer.setAttribute('draggable', 'true');
  
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    taskContainer.appendChild(checkbox);
    checkbox.id = 'task__checkbox';
  
    const grabTask = document.createElement('div');
    taskContainer.appendChild(grabTask);
    grabTask.classList.add('task__drag');
  
    const grabLine = document.createElement('span');
    grabTask.appendChild(grabLine);
    grabLine.classList.add('drag__line');
  
    const taskValue = document.createElement('textarea');
    taskContainer.appendChild(taskValue);
    taskValue.classList.add('task__input');
  
    const priority = document.createElement('div');
    taskContainer.appendChild(priority);
    priority.classList.add('task__priority');
  
    saveTask(taskContainer, checkbox, priority);
    dragTask();
    resizeTask();
  };
  
  const resizeTask = () =>{
    const input = [...document.querySelectorAll('textarea')]
    input.forEach(item => {
      item.addEventListener('keyup', e=>{
        item.style.height = "auto"
        let scHeight = e.target.scrollHeight;
        item.style.height = `${scHeight}px`
      })
    })
  }

  const dragTask = () => {
    const taskItem = document.querySelectorAll('.task');
    const graber = document.querySelectorAll('.task__drag');
    taskItem.forEach(draggable => {
      draggable.addEventListener('dragstart', () => {
        draggable.classList.add('dragging');
      });
      draggable.addEventListener('dragend', () => {
        draggable.classList.remove('dragging');
      });
    });
  
    appContainer.addEventListener('dragover', e => {
      e.preventDefault();
      const afterElement = getDragAfterElement(e.clientY);
      const draggable = document.querySelector('.dragging');
      if (afterElement === null) {
        appContainer.appendChild(draggable);
      } else {
        appContainer.insertBefore(draggable, afterElement);
      }
    });
  };

const getDragAfterElement = (y) =>{
    const draggableElements = [...appContainer.querySelectorAll('.draggable:not(.dragging)')]
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect()
        const offset = y - box.top - box.height / 2
        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child }
        } else {
          return closest
        }
      }, { offset: Number.NEGATIVE_INFINITY }).element
}

const saveTask = (taskContainer: HTMLDivElement, checkbox: HTMLElement, priority: HTMLElement) =>{
    const taskObj = {
        task: taskContainer,
        isDone: checkbox,
        priority: priority
    }        
    tasksList.push(taskObj)
}

const removeTask = (): void => {
    tasksList = tasksList.filter(item => {
      if (item.isDone.checked) {
        item.task.remove();
        return false;
      }
      return true;
    });
};
   
const controlBar = document.querySelector('.control-bar') as HTMLElement;
document.addEventListener('scroll', (): void => {
    if (window.scrollY >= 165) {
      controlBar.style.position = 'fixed';
      controlBar.style.zIndex = '100';
      controlBar.style.top = '0';
    } else {
      controlBar.style.position = '';
    }
});

addTaskBtn.addEventListener('click', buildTask);
removeTaskBtn.addEventListener('click', removeTask);


const createNewListBtn = document.querySelector('#create-new')
const oldList = [];
const selectPages = document.querySelector('.list')
selectPages.addEventListener('click', ()=>{
  if(selectPages.value === 'current'){
      // console.log('Obecna lista')
      const saveTaskList = tasksList
      console.log(deletedButInMemmory)
      // appContainer.innerHTML = deletedButInMemmory
  }
  if(selectPages.value === 'new'){
      // console.log('Nowa lista')
      // const deletedButInMemmory = tasksList.splice(0, tasksList.length);
      // console.log(deletedButInMemmory)
      // appContainer.innerHTML = ''
      createNewList()
  }
})

const createNewList = () =>{
  const oldList = tasksList.splice(0, tasksList.length);
  console.log(oldList)
  const newListOption = document.createElement('option')
  selectPages.appendChild(newListOption)
  newListOption.textContent = 'New list'
  appContainer.innerHTML = ''
}
createNewListBtn?.addEventListener('click', createNewList)
