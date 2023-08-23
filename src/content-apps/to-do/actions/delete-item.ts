import removeItemAtIndex from './remove-item-at-index';
//  interfaces and types
import { TodoList } from '../state/interfaces-and-types';

type Payload = {
  index: number;
  setTodoList: Function;
  todoList: TodoList;
};

const deleteItem = (payload: Payload) => {
  const { index, setTodoList, todoList } = payload;
  const newList = removeItemAtIndex(todoList, index);

  setTodoList(newList);
};

export default deleteItem;
