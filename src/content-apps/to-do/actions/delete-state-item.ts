//  interfaces and types
import { TodoList } from '../state/interfaces-and-types';

type Payload = {
  key: string;
  setState: Function;
  value: string;
};

const deleteStateItem = (payload: Payload) => {
  const { key, setState, value } = payload;

  setState((prevState: TodoList) => {
    const newState = prevState.filter((prevItem) => {
      const keyPrevItemValue = prevItem[key as keyof typeof prevItem];

      return keyPrevItemValue !== value;
    });

    return newState;
  });
};

export default deleteStateItem;
