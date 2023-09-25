import { v4 as uuidv4 } from 'uuid';
//  interfaces and types
import { TodoList } from '../state/interfaces-and-types';

type Payload = {
  inputValue: string;
  setInputValue: Function;
  setTodoList: Function;
};

const createItem = (payload: Payload) => {
  const { inputValue, setInputValue, setTodoList } = payload;

  setTodoList((oldTodoList: TodoList) => [
    ...oldTodoList,
    {
      id: uuidv4(),
      text: inputValue,
      isComplete: false,
    },
  ]);

  setInputValue('');
};

export default createItem;
