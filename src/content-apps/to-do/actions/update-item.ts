//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  item: TodoItem;
  key: string;
  value: any;
};

const updateItem = (payload: Payload) => {
  const { item, key, value } = payload;

  return {
    ...item,
    [key]: value,
  };
};

export default updateItem;
