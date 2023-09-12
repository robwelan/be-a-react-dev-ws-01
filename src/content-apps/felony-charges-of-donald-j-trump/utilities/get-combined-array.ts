//  constants
import { cases as arrayOfCases } from '../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../constants/array-of-felonies-01';
import { felonies as arrayOfFelonies02 } from '../constants/array-of-felonies-02';
import { felonies as arrayOfFelonies03 } from '../constants/array-of-felonies-03';
import { felonies as arrayOfFelonies0401 } from '../constants/array-of-felonies-04-01';
import { felonies as arrayOfFelonies0402 } from '../constants/array-of-felonies-04-02';
import { felonies as arrayOfFelonies0403 } from '../constants/array-of-felonies-04-03';
import { felonies as arrayOfFelonies0404 } from '../constants/array-of-felonies-04-04';
import { felonies as arrayOfFelonies0405 } from '../constants/array-of-felonies-04-05';
import { felonies as arrayOfFelonies0406 } from '../constants/array-of-felonies-04-06';
import { felonies as arrayOfFelonies0407 } from '../constants/array-of-felonies-04-07';
import { felonies as arrayOfFelonies0408 } from '../constants/array-of-felonies-04-08';
import { felonies as arrayOfFelonies0409 } from '../constants/array-of-felonies-04-09';

const headings = arrayOfCases;
const items = [
  ...arrayOfFelonies01,
  ...arrayOfFelonies02,
  ...arrayOfFelonies03,
  ...arrayOfFelonies0401,
  ...arrayOfFelonies0402,
  ...arrayOfFelonies0403,
  ...arrayOfFelonies0404,
  ...arrayOfFelonies0405,
  ...arrayOfFelonies0406,
  ...arrayOfFelonies0407,
  ...arrayOfFelonies0408,
  ...arrayOfFelonies0409,
];

const getCombinedArrays = () => {
  const array = [];

  for (let i = 0; i < headings.length; i++) {
    // Create a heading element.
    array.push({ ...headings[i], list: [], type: 'heading' });
    const id = headings[i]['id'];

    // Loop through the related list and create list items.
    for (let j = 0; j < items.length; j++) {
      const caseId = items[j]['caseId'];

      if (caseId === id) {
        array[i].list.push({ ...items[j], type: 'item' });
      }
    }
  }

  return array;
};

export default getCombinedArrays;
