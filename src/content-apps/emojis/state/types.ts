export type TypeEmoji = {
  codes: string;
  category: string;
  glyph: string;
  group: string;
  id: string;
  index: string;
  name: string;
  subgroup: string;
};

export type TypeArrayOfEmojis = Array<TypeEmoji>;

export type TypeComplexLists = {
  group: string;
  subgroups: Array<string>;
};

export type TypeEmojiDictionary = {
  emojis: TypeArrayOfEmojis;
  processed: boolean;
};

export type TypeEmojiFakeAPI = {
  emojis: TypeArrayOfEmojis;
  length: number;
  loading: boolean;
  processed: boolean;
};

export type TypeEmojiOrganisation = {
  complex: Array<TypeComplexLists>;
  simple: TypeSimpleLists;
  processed: boolean;
};

export type EmojiFilter = {
  emojis: TypeArrayOfEmojis;
  filtered: boolean;
  input: string;
  group: string;
  subgroup: string;
};

type TypeSimpleLists = {
  categories: Array<string>;
  groups: Array<string>;
  subgroups: Array<string>;
};
