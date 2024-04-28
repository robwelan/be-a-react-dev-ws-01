export type TypeEmoji = {
  codes: string;
  category: string;
  glyph: string;
  group: string;
  index: string;
  name: string;
  subgroup: string;
};

type TypeComplexLists = {
  group: string;
  subgroups: Array<string>;
};

type TypeSimpleLists = {
  categories: Array<string>;
  groups: Array<string>;
  subgroups: Array<string>;
};

export type TypeEmojiDictionary = {
  emojis: Array<TypeEmoji>;
  processed: boolean;
};

export type TypeEmojiOrganisation = {
  complex: Array<TypeComplexLists>;
  simple: TypeSimpleLists;
  processed: boolean;
};