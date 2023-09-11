import { Case } from '../constants/array-of-cases';

type Payload = {
  headings: Array<Case>;
  items: Array<Felony>;
};

const getCombinedArrays = (payload: Payload) => {
  const { headings, items } = payload;
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
