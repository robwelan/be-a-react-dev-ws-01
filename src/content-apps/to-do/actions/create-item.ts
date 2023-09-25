import { v4 as uuidv4 } from 'uuid';
//  interfaces and types
import { TodoList } from '../state/interfaces-and-types';

type Payload = {
  setState: Function;
  value: string;
};

const createItem = (payload: Payload) => {
  const { setState, value } = payload;

  setState((prevState: TodoList) => [
    ...prevState,
    {
      id: uuidv4(),
      text: value,
      isComplete: false,
    },
  ]);
};

export default createItem;
