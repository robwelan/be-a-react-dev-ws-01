//  interfaces and types
import { TodoItem } from '../state/interfaces-and-types';

const replaceItemAtIndex = (
  arr: Array<TodoItem>,
  index: number,
  newValue: TodoItem,
) => [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];

export default replaceItemAtIndex;
