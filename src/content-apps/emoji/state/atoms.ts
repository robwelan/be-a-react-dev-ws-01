import { atom } from 'recoil';
//  types
import {
  TypeEmojiDictionary,
  EmojiFilter,
  TypeEmojiOrganisation,
} from './types';

const emoji = require('emoji.json');

export const emojiDictionary = atom<TypeEmojiDictionary>({
  key: 'emojiDictionary',
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

export const emojiDictionaryFilter = atom<EmojiFilter>({
  key: 'emojiDictionaryFilter',
  default: { input: '', group: '', subgroup: '' },
});
