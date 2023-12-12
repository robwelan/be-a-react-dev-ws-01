import { atom } from 'recoil';
//  default state
import { device } from './default-state';

const fontSizeState = atom({
  key: 'fontSizeState',
  default: 1,
}); //  assume em is the unit

const siteConfiguration = atom({
  key: 'siteConfiguration',
  default: {
    device,
    loaded: false,
  },
});

export { fontSizeState, siteConfiguration };
