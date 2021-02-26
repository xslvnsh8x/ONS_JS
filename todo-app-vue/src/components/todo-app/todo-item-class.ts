interface TodoItemOptions {
  priority: number;
  text: string;
  deadline: string;
}

export default class TodoItem {
  priority: number;

  text: string;

  deadline: string;

  createDate: number;

  id: number;

  constructor(options: TodoItemOptions = { priority: 1, text: 'UNSET', deadline: 'UNSET' }) {
    const { priority, text, deadline } = options;

    this.priority = priority;
    this.text = text;
    this.deadline = deadline;
    this.createDate = Date.now();
    this.id = Date.now() + (Math.floor(Math.random() * 1000001));
  }
}
