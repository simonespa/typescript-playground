import Todo from './Todo';

export function todosByUserId(userId:number, todos:Todo[]): Todo[] {
  return todos.filter((todo:Todo) => todo.userId === userId);
}

export function uncompleted(todos:Todo[]): Todo[] {
  return todos.filter((todo:Todo) => todo.completed === false);
}

export function uncompletedTodosByUserId(userId:number, todos:Todo[]): Todo[] {
  return uncompleted(todosByUserId(userId, todos));
}
