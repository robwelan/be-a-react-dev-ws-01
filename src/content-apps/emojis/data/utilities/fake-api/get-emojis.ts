//  types
import { TypeEmoji } from '../../../state/types';

type GetEmojisPayload = {
  core: Array<TypeEmoji>;
  filtered: Array<TypeEmoji>;
  isFiltered: boolean;
};

const getEmojis = (payload: GetEmojisPayload) => {
  const { core, filtered, isFiltered } = payload;

  if (isFiltered) {
    return filtered;
  }

  return core;
};

export default getEmojis;
