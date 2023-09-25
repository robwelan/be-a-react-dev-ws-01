import { v4 as uuidv4 } from 'uuid';

type Payload = {
  value: string;
};

const createItem = (payload: Payload) => {
  const { value } = payload;

  const todo = {
    id: uuidv4(),
    isComplete: false,
    text: value,
  };

  return todo;
};

export default createItem;
