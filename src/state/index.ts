import { atom } from 'recoil';

export const fontSizeState = atom({
  key: 'fontSizeState',
  default: 1,
}); //  assume em is the unit
