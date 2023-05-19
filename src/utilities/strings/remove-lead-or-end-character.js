const getRemoveLeadOrEndCharacter = (payload = {}) => {
  const { value = '', character = {} } = payload;
  const { end = '', lead = '' } = character;

  if (value === '' || (end === '' && lead === '')) {
    return value;
  }

  const valueArray = value.split('');

  if (valueArray[0] === lead) {
    valueArray.shift();
  }

  if (valueArray.at(-1) === end) {
    valueArray.pop();
  }

  return valueArray.join('').trim();
};

export default getRemoveLeadOrEndCharacter;
