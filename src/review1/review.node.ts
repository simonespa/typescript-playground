import * as todos from './data/todos.json';
import { todosByUserId, uncompleted } from './todos';
import { byId } from './sort';

const todosOne = todosByUserId(1, todos.todos).sort(byId);
console.log(todosOne);

console.log('--------');

const uncompletedTodosOne = uncompleted(todosOne);
console.log(uncompletedTodosOne);
