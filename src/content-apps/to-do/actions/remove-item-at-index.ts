//  interfaces and types
import { TodoItem } from '../state/interfaces-and-types';

const removeItemAtIndex = (arr: Array<TodoItem>, index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default removeItemAtIndex;
