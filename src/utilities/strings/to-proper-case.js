const toProperCase = (payload) => {
  const { word = '' } = payload;

  if (word === '') {
    return '';
  }

  return word.charAt(0).toUpperCase() + word.slice(1);
};

export default toProperCase;
