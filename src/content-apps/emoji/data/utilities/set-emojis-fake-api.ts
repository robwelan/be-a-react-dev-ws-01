//  types
import { TypeArrayOfEmojis } from '../../state/types';

type SetEmojisFakeAPIPayload = {
  emojis: TypeArrayOfEmojis;
  offset?: number;
  setState: Function;
};

const setEmojisFakeAPI = (payload: SetEmojisFakeAPIPayload) => {
  const { emojis = [], offset = 50, setState } = payload;

  setState({
    emojis,
    length: emojis.length || 0,
    offset: offset > 0 ? offset : 50,
  });
};

export default setEmojisFakeAPI;
