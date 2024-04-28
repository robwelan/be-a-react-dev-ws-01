const emoji = require('emoji.json');
//  types
import {
  TypeEmoji,
  TypeEmojiDictionary,
  TypeEmojiOrganisation,
} from '../../state/types';
//  local utilities
import setEmoji from './set-emoji';
//  utilities
import createUniqueList from '../../../../utilities/arrays/create-unique-list';
import simpleSort from '../../../../utilities/arrays/simple-sort';

type Payload = {
  setEmojis: Function;
  setOrganisations: Function;
};

const setData = (payload: Payload) => {
  const { setEmojis, setOrganisations } = payload;
  const categories: Array<string> = [];
  const groups: Array<string> = [];
  const subgroups: Array<string> = [];
  let processedItems = 0;

  const sorted = emoji
    .sort((a: TypeEmoji, b: TypeEmoji) => {
      const { name: nameA } = a;
      const { name: nameB } = b;

      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    })
    .map((emoji: TypeEmoji) => {
      const { category, codes, group, name, subgroup } = emoji;
      return {
        ...emoji,
        glyph: setEmoji({ codes }),
        index: `${name.toLowerCase()}${category.toLowerCase()}${(group.toLowerCase(), subgroup.toLowerCase())}`,
      };
    });

  sorted.forEach((emoji: TypeEmoji) => {
    const { category, group, subgroup } = emoji;

    createUniqueList({
      item: category,
      list: categories,
      sensitive: false,
    });

    createUniqueList({
      item: group,
      list: groups,
      sensitive: false,
    });

    createUniqueList({
      item: subgroup,
      list: subgroups,
      sensitive: false,
    });

    if (++processedItems === sorted.length) {
      const sortedCategories = categories.toSorted();
      const sortedGroups = groups.toSorted();
      const sortedSubGroups = subgroups.toSorted();

      setOrganisations((prevState: TypeEmojiOrganisation) => ({
        ...prevState,
        simple: {
          ...prevState.simple,
          categories: sortedCategories,
          groups: sortedGroups,
          subgroups: sortedSubGroups,
        },
        processed: true,
      }));
    }
  });

  setEmojis((prevState: TypeEmojiDictionary) => ({
    ...prevState,
    emojis: sorted,
    processed: true,
  }));
};

export default setData;
