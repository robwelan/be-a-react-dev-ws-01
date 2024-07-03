import { Dispatch, SetStateAction } from 'react';
import { EmojiFilter } from '../../../state/types';

type EventPayload = {
  target?: {
    value?: string;
  };
};

type SetState = Dispatch<SetStateAction<EmojiFilter>>;

type HandleSelectChangePayload = {
  event: EventPayload;
  key: string;
  setState: SetState;
};

const handleSelectChange = (payload: HandleSelectChangePayload) => {
  const { event, key, setState } = payload;
  const { target = {} } = event;
  const { value = '' } = target;

  setState((prevState: EmojiFilter) => ({ ...prevState, [key]: value }));
};

export default handleSelectChange;
