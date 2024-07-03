import { TypeEmoji } from '../../../state/types';

type GetFilteredEmojisPayload = {
  emojis: Array<TypeEmoji>;
  filtered: boolean;
  filters: {
    input: string;
    group: string;
    subgroup: string;
  };
};

const getFilteredEmojis = (payload: GetFilteredEmojisPayload) => {
  const { emojis, filtered, filters } = payload;
  const { input, group, subgroup } = filters;
  let filteredEmojis = [];

  if (!filtered) return []; // no work to do;

  if (input === '') {
    filteredEmojis = emojis.filter((emoji) => {
      const { group: emojiGroup, subgroup: emojiSubgroup } = emoji;

      if (emojiSubgroup.toLowerCase() === subgroup.toLowerCase()) {
        return emoji;
      }

      if (emojiGroup.toLowerCase() === group.toLowerCase() && subgroup === '') {
        return emoji;
      }

      return null;
    });

    return filteredEmojis;
  }

  filteredEmojis = emojis.filter((emoji) => {
    const { index } = emoji;

    if (index.toLowerCase().includes(input.toLowerCase())) {
      return emoji;
    }

    return null;
  });

  return filteredEmojis;
};

export default getFilteredEmojis;
