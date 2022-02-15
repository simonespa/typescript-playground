import Todo from './Todo';

export function byUserId(todo1: Todo, todo2: Todo) {
  if (todo1.userId > todo2.userId) {
    return -1;
  }

  if (todo1.userId < todo2.userId) {
    return 1
  }

  return 0;
}

export function byId(todo1: Todo, todo2: Todo) {
  if (todo1.id > todo2.id) {
    return -1;
  }

  if (todo1.id < todo2.id) {
    return 1;
  }

  return 0;
}

export function byTitle(todo1: Todo, todo2: Todo) {
  if (todo1.title > todo2.title) {
    return -1;
  }

  if (todo1.title < todo2.title) {
    return 1;
  }

  return 0;
}
