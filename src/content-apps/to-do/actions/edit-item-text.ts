import replaceItemAtIndex from './replace-item-at-index';
//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  index: number;
  item: TodoItem;
  setTodoList: Function;
  todoList: TodoList;
  value: string;
};

const editItemText = (payload: Payload) => {
  const { index, item, setTodoList, todoList, value } = payload;

  const newList = replaceItemAtIndex(todoList, index, {
    ...item,
    text: value,
  });

  setTodoList(newList);
};

export default editItemText;
