import { atom } from 'recoil';
//  constants
import entities from '../constants/entities';
import footnotes from '../constants/footnotes';

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
    column: 'Character',
    order: 'ascending',
    sorted: false,
    step: 'entities',
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
