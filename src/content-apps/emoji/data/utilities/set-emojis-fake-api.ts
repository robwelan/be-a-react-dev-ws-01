//  types
import { TypeArrayOfEmojis } from '../../state/types';

type SetEmojisFakeAPIPayload = {
  emojis: TypeArrayOfEmojis;
  setState: Function;
};

const setEmojisFakeAPI = (payload: SetEmojisFakeAPIPayload) => {
  const { emojis = [], setState } = payload;

  setState({
    emojis,
    length: emojis.length || 0,
  });
};

export default setEmojisFakeAPI;
