//  constants
import { cases as arrayOfCases } from '../constants/array-of-cases';
import { felonies as arrayOfFelonies01 } from '../constants/array-of-felonies-01';
import { felonies as arrayOfFelonies02 } from '../constants/array-of-felonies-02';
import { felonies as arrayOfFelonies03 } from '../constants/array-of-felonies-03';
const headings = arrayOfCases;
const items = [
  ...arrayOfFelonies01,
  ...arrayOfFelonies02,
  ...arrayOfFelonies03,
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
