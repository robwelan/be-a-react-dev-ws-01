import replaceItemAtIndex from './replace-item-at-index';
//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  index: number;
  item: TodoItem;
  setTodoList: Function;
  todoList: TodoList;
};

const toggleItemCompletion = (payload: Payload) => {
  const { index, item, setTodoList, todoList } = payload;

  const newList = replaceItemAtIndex(todoList, index, {
    ...item,
    isComplete: !item.isComplete,
  });

  setTodoList(newList);
};

export default toggleItemCompletion;
