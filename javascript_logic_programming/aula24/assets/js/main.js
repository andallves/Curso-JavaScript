const inputTask = document.querySelector('.input-new-task');
const tasks = document.querySelector('.tasks');

const createElement = (tag) => {
  const element = document.createElement(tag);
  return element;
}

inputTask.addEventListener('keypress', (e) => {
  if (e.keyCode === 13) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }
});

const clearInput = () => {
  inputTask.value = '';
  inputTask.focus();
}

const createDeleteButton = (li) => {
  const deleteButton = createElement('button');
  deleteButton.setAttribute('class', 'delete');
  deleteButton.innerHTML = 'Apagar';
  li.appendChild(deleteButton);
}

const createTask = (taskText) => {
  const li = createElement('li');
  li.innerHTML = taskText;
  tasks.appendChild(li);
  createDeleteButton(li);
  clearInput();
  saveTasks();
}

document.addEventListener('click', (e) => {
  const element = e.target;

  if (element.classList.contains('btn-task')) {
    if (!inputTask.value) return;
    createTask(inputTask.value);
  }

  if (element.classList.contains('delete')) {
    element.parentElement.remove();
    saveTasks();
  }
});

const saveTasks = () => {
  const liTasks = tasks.querySelectorAll('li');
  const listTasks = [];

  for (let task of liTasks) {
    let taskText = task.innerText;
    taskText = taskText.replace('Apagar', '').trim();
    listTasks.push(taskText);
  }
  const tasksJSON = JSON.stringify(listTasks);
  localStorage.setItem('tasks', tasksJSON);
}

const addSaveTasks = () => {
  const tasks = localStorage.getItem('tasks');
  const tasksList = JSON.parse(tasks);

  for (let task of tasksList) {
    createTask(task);
  }
}

addSaveTasks();

