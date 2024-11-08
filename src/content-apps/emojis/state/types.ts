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

export type TypeAllEmojis = {
  emojis: TypeArrayOfEmojis;
  processed: boolean;
};

export type TypeEmojiOrganisation = {
  complex: Array<TypeComplexLists>;
  simple: TypeSimpleLists;
  processed: boolean;
};

export type TypeFilteredEmojis = {
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
