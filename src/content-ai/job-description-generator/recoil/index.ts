import { atom } from 'recoil';
import state from './default-state';

const aiJobDescriptionGenerator = atom({
  key: 'aiJobDescriptionGenerator', // unique ID (with respect to other atoms/selectors)
  default: state, // default value (aka initial value)
});

export default aiJobDescriptionGenerator;
