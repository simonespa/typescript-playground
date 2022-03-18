import Todo from './Todo';

export default class Job implements Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;

  constructor(todo:Todo) {
    this.userId = todo.userId;
    this.id = todo.id;
    this.title = todo.title;
    this.completed = todo.completed;
  }
}
