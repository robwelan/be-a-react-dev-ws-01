import { atom } from 'recoil';
//  constants
import entities from '../constants/entities';
import footnotes from '../constants/footnotes';
import {
  DATA_SET_SORT_STEP_ENTITIES,
  SORT_BY_COLUMN_CHARACTER,
  SORT_BY_ORDER_ASCENDING,
} from '../constants/sorting';

export const htmlEntitiesState = atom({
  key: 'htmlEntitiesState',
  default: { entities, sorted: false },
});

export const htmlEntitiesFootnotesState = atom({
  key: 'htmlEntitiesFootnotesState',
  default: { footnotes, sorted: false },
});

/*
  tells everyone what the order is.
*/
export const htmlEntitiesSortState = atom({
  key: 'htmlEntitiesSortState',
  default: {
    column: SORT_BY_COLUMN_CHARACTER,
    order: SORT_BY_ORDER_ASCENDING,
    sorted: false,
    step: DATA_SET_SORT_STEP_ENTITIES,
  },
});

/*
  record an order of the footnotes that will then apply back to the entities
*/
export const htmlEntitiesOrderState = atom({
  key: 'htmlEntitiesFootnotesOrderState',
  default: {
    list: [''],
    sorted: false,
  },
});
