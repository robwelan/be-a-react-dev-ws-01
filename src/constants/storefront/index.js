import storefrontAmazon from '../storefront-amazon';
import storefrontZazzle from '../storefront-zazzle';

const store = {
  name: 'Be A React Dev',
  uri: 'https://www.zazzle.com.au/store/beareactdev',
};

const mergeObjects = (...objects) => {
  let merged = {};

  // Iterate through each object
  objects.forEach(obj => {
    // Iterate through each key in the object
    for (let key in obj) {
      merged[key] = (merged[key] || []).concat(obj[key]);
    }
  });

  // Sort each array by the name property
  for (let key in merged) {
    merged[key].sort((a, b) => a.name.localeCompare(b.name));
  }

  return merged;
};

const mergedData = mergeObjects(storefrontAmazon, storefrontZazzle);

const storefront = {
  store,
  ...mergedData,
};

export default storefront;
