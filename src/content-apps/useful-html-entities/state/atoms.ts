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

export const htmlEntitiesSortState = atom({
  key: 'htmlEntitiesSortState',
  default: { column: 'Character', order: 'ascending' },
});

export const htmlEntitiesOrderState = atom({
  key: 'htmlEntitiesFootnotesOrderState',
  default: [],
});
