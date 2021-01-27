import '../style/style.css'
import {TodoItem, createNewTodoItem, createTodoElementHTML} from './todo'

const selectElement = document.querySelector('.todoControls__prioritySelect');
const textInputElement = document.querySelector('.todoControls__textInput');
const dateInputElement = document.querySelector('.todoControls__dateInput');
const addButtonElement = document.querySelector('.todoControls__addButton');
const todoListElement = document.querySelector('.todoList');

const todoListTasks = [
  new TodoItem({
    priority: 1,
    text: 'Buy some food',
    deadline: '01.02.2021'
  }),
  new TodoItem({
    priority: 3,
    text: 'Buy a new car',
    deadline: '01.08.2021'
  }),
  new TodoItem({
    priority: 2,
    text: 'Become a developer',
    deadline: '01.03.2021'
  })
];

function addButtonHandler() {
  const newTodoItem = createNewTodoItem(selectElement, textInputElement, dateInputElement);

  if (textInputElement.value !== '') {
    todoListTasks.unshift(newTodoItem);
    textInputElement.classList.remove('inputErr');
    textInputElement.value = '';
    dateInputElement.classList.remove('inputErr');
    dateInputElement.value = '';
    renderItemsList();
  } else {
    textInputElement.classList.add('inputErr');
    dateInputElement.classList.add('inputErr');
  }
}

function todoItemClickHandler(event) {
  event.stopPropagation();
  event.preventDefault();

  const {target} = event;
  const {classList} = target;
  const isDeleteButton = classList.contains('todo__buttonDelete');
  const isEditButton = classList.contains('todo__buttonEdit');
  const isSaveButton = classList.contains('todo__editModeButton');
  const todoElement = target.closest('.todo');
  const todoId = todoElement && todoElement.dataset.id;

  if (isDeleteButton) {
    const index = todoListTasks.findIndex(todoItem => todoItem.id === todoId);
    todoListTasks.splice(index, 1);
    renderItemsList();
  }

  if (isEditButton) {
    const input = todoElement.querySelector('.todo__editModeInput');

    todoElement.classList.toggle('todo--editEnabled');
    input.value = todoElement.querySelector('.todo__text').textContent;
  }

  if (isSaveButton) {
    const input = todoElement.querySelector('.todo__editModeInput');
    const index = todoListTasks.findIndex(todoItem => todoItem.id === todoId);
    const valueToSet = input.value;

    if (!valueToSet.length) {
      return;
    }

    todoElement.classList.toggle('todo--editEnabled');
    const textInputElement = todoElement.querySelector('.todo__text');
    textInputElement.textContent = valueToSet;
    todoListTasks[index].text = valueToSet;
  }
}

addButtonElement.addEventListener('click', addButtonHandler);

todoListElement.addEventListener('click', todoItemClickHandler);

function renderItemsList() {
  const tasksToRender = todoListTasks.map(todo => createTodoElementHTML(todo));
  todoListElement.innerHTML = tasksToRender.join('');
}

function initApp() {
  renderItemsList();
}

initApp();