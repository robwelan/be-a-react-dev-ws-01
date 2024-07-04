import { Dispatch, SetStateAction } from 'react';
import { TypeFilteredEmojis } from '../../../state/types';

type EventPayload = {
  target?: {
    value?: string;
  };
};

type SetState = Dispatch<SetStateAction<TypeFilteredEmojis>>;

type HandleSelectChangePayload = {
  event: EventPayload;
  key: string;
  setState: SetState;
};

const handleSelectChange = (payload: HandleSelectChangePayload) => {
  const { event, key, setState } = payload;
  const { target = {} } = event;
  const { value = '' } = target;

  setState((prevState: TypeFilteredEmojis) => ({ ...prevState, [key]: value }));
};

export default handleSelectChange;
