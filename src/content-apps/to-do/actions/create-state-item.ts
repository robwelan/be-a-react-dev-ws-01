//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  item: TodoItem;
  setState: Function;
};

const createStateItem = (payload: Payload) => {
  const { item, setState } = payload;

  setState((prevState: TodoList) => [...prevState, item]);
};

export default createStateItem;
