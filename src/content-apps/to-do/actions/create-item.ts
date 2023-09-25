import { v4 as uuidv4 } from 'uuid';

type Payload = {
  value: string;
};

const createItem = (payload: Payload) => {
  const { value } = payload;

  return {
    id: uuidv4(),
    text: value,
    isComplete: false,
  };
};

export default createItem;
