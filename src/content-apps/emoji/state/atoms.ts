import { atom } from 'recoil';
//  types
import { TypeEmojiDictionary, TypeEmojiOrganisation } from './types';

const emoji = require('emoji.json');

export const emojiDictionary = atom<TypeEmojiDictionary>({
  key: 'emojiDictionary',
  // default: emoji.sort((emojiA, emojiB) => {
  //   const { name: nameA } = emojiA;
  //   const { name: nameB } = emojiB;

  //   if (nameA < nameB) return -1;
  //   if (nameA > nameB) return 1;
  //   return 0;
  // }),
  default: { emojis: [], processed: false },
});

export const emojiOrganisation = atom<TypeEmojiOrganisation>({
  key: 'emojiOrganisation',
  default: {
    complex: [{ group: '', subgroups: [] }],
    simple: { categories: [], groups: [], subgroups: [] },
    processed: false,
  },
});

export const emojiDictionaryFilter = atom({
  key: 'emojiDictionaryFilter',
  default: '',
});
