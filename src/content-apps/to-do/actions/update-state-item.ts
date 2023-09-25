//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  item: TodoItem;
  key: string;
  setState: Function;
};

const updateStateItem = (payload: Payload) => {
  const { item, key, setState } = payload;

  setState((prevState: TodoList) => {
    const newState = prevState.map((prevItem) => {
      const keyPrevItemValue = prevItem[key as keyof typeof prevItem];
      const keyItemValue = item[key as keyof typeof item];

      if (keyPrevItemValue === keyItemValue) {
        return { ...prevItem, ...item };
      }

      return prevItem;
    });

    return newState;
  });
};

export default updateStateItem;
