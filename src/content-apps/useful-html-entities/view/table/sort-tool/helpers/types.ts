import { Entities, EntitiesState, Entity } from '../../../../state/types';

type EntityOrder = {
  list: Array<string>;
  sorted: boolean;
};

type EntitiesOrder = {
  column: string;
  order: string;
  sorted: boolean;
  step: string;
};

type Footnote = {
  key: string;
};

type Footnotes = {
  footnotes: Array<Footnote>;
  sorted: boolean;
};

type PayloadCheckIsCurrentColumn = {
  column: string;
  control: string;
};

type PayloadGetCorrectOrder = {
  order: string;
};

type PayloadResetSetters = {
  setEntitiesState: React.Dispatch<React.SetStateAction<EntitiesState>>;
  setFootnotesState: React.Dispatch<React.SetStateAction<Array<Footnote>>>;
  setOrderState: React.Dispatch<React.SetStateAction<EntityOrder>>;
};

type PayloadSetSortSettings = {
  main: {
    control: string;
    state: EntitiesOrder;
    setState: React.Dispatch<React.SetStateAction<EntitiesOrder>>;
  };
  setters: {
    setEntitiesState: React.Dispatch<React.SetStateAction<EntitiesState>>;
    setFootnotesState: React.Dispatch<React.SetStateAction<Array<Footnote>>>;
    setOrderState: React.Dispatch<React.SetStateAction<EntityOrder>>;
  };
};

export {
  PayloadCheckIsCurrentColumn,
  PayloadGetCorrectOrder,
  PayloadResetSetters,
  PayloadSetSortSettings,
};
