import { atom } from 'recoil';
//  types
import {
  TypeEmojiDictionary,
  TypeEmojiFakeAPI,
  EmojiFilter,
  TypeEmojiOrganisation,
} from './types';

export const emojiDictionary = atom<TypeEmojiDictionary>({
  key: 'emojiDictionary',
  default: { emojis: [], processed: false },
});

export const emojiFakeAPI = atom<TypeEmojiFakeAPI>({
  key: 'emojiFakeAPI',
  default: { emojis: [], length: 0, loading: false, processed: false },
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
  default: { emojis: [], filtered: false, input: '', group: '', subgroup: '' },
});
