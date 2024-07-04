import { Dispatch, SetStateAction } from 'react';
import { TypeFilteredEmojis } from '../../../state/types';

type SetState = Dispatch<SetStateAction<TypeFilteredEmojis>>;

type HandleClickClearPayload = {
  key: string;
  setState: SetState;
};

const handleClickClear = (payload: HandleClickClearPayload) => {
  const { key, setState } = payload;

  setState((prevState) => ({
    ...prevState,
    [key]: '',
  }));
};

export default handleClickClear;
