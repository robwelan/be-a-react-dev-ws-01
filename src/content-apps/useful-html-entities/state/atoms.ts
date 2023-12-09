import { atom } from 'recoil';
//  constants
import entities from '../constants/entities';
import footnotes from '../constants/footnotes';

export const htmlEntitiesState = atom({
  key: 'htmlEntitiesState',
  default: entities,
});

export const htmlEntitiesFootnotesState = atom({
  key: 'htmlEntitiesFootnotesState',
  default: footnotes,
});

/*
  tells everyone what the order is.
*/
export const htmlEntitiesSortState = atom({
  key: 'htmlEntitiesSortState',
  default: { column: 'Character', order: 'ascending' },
});

/*
  record an order of the footnotes that will then apply back to the entities
*/
export const htmlEntitiesOrderState = atom({
  key: 'htmlEntitiesFootnotesOrderState',
  default: [],
});
