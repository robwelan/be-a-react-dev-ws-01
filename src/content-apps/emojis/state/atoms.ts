import { atom } from 'recoil';
//  types
import {
  TypeAllEmojis,
  TypeFilteredEmojis,
  TypeEmojiOrganisation,
} from './types';

export const allEmojis = atom<TypeAllEmojis>({
  key: 'allEmojis',
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

export const filteredEmojis = atom<TypeFilteredEmojis>({
  key: 'emojiDictionaryFilter',
  default: { emojis: [], filtered: false, input: '', group: '', subgroup: '' },
});
