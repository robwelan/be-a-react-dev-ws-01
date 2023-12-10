type Footnote = {
  key: string;
  value: number;
};

type SortColumns = {
  alphanumeric: string;
  character: string;
  unicode: string;
  type: string;
};

type Entity = {
  alphanumeric: string;
  character: string;
  footnotes: Array<Footnote>;
  literal: string;
  unicode: string;
  preferredTo: string;
  type: string;
};
type Entities = Array<Entity>;

type EntitiesState = {
  entities: Entities;
  sorted: boolean;
};

type SortState = {
  column: string;
  order: string;
  sorted: boolean;
  step: string;
};

export { Entities, EntitiesState, Entity, Footnote, SortColumns, SortState };
