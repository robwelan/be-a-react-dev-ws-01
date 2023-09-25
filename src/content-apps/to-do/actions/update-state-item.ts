//  interfaces and types
import { TodoItem, TodoList } from '../state/interfaces-and-types';

type Payload = {
  item: TodoItem;
  key: string;
  setState: Function;
};

const updateStateItem = (payload: Payload) => {
  const { item, key, setState } = payload;
  const keyItemValue = item[key as keyof typeof item];

  setState((prevState: TodoList) => {
    const newState = prevState.map((prevItem) => {
      const keyPrevItemValue = prevItem[key as keyof typeof prevItem];

      if (keyItemValue === keyPrevItemValue) {
        return { ...prevItem, ...item };
      }

      return prevItem;
    });

    return newState;
  });
};

export default updateStateItem;
