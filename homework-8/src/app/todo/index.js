export class TodoItem {
  constructor(options = {priority: 1}) {
    const {priority, text, deadline} = options;

    this.priority = priority;
    this.text = text;
    this.deadline = deadline;
    this.createDate = Date.now();
    this.id = Math.random().toString(36).substring(2, 15);
  }
}

export function createNewTodoItem(selectElement, textInputElement, dateInputElement) {
  const priority = selectElement.options[selectElement.selectedIndex].value;
  const text = textInputElement.value;
  const deadline = dateInputElement.value;

  return new TodoItem({
    priority,
    text,
    deadline
  });
}

// export function editTodoItem(textInputElement) {
//   const text = textInputElement.value;
// }

const todoMods = {
  1: 'todo--high',
  2: 'todo--normal',
  3: 'todo--low'
};

export function createTodoElementHTML(todoItem) {
  const {priority, text, deadline, id} = todoItem;
  return `
    <div class="todo ${todoMods[priority]}" data-id="${id}">
      <div class="todo__viewMode">
        <div class="todo__text">${text}</div>
        <div class="todo__deadline">${deadline}</div>
      </div>
      <div class="todo__editMode">
        <input type="text" class="todo__editModeInput">
        <button class="todo__editModeButton btn">
          <i class="icon-save far fa-check-square"></i>
        </button>
      </div>
      <div class="todo__buttons">
        <button class="todo__buttonEdit btn">
          <i class="icon-edit far fa-edit"></i>
        </button>
        <button class="todo__buttonDelete btn">
          <i class="icon-del far fa-trash-alt"></i>
        </button>
      </div>
    </div>
  `;
}