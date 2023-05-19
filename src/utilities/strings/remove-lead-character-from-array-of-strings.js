import getRemoveLeadOrEndCharacter from './remove-lead-or-end-character';

const removeLeadCharacterFromArrayOfStrings = (payload) => {
  const { values = [], leadCharacter = '' } = payload;

  if (leadCharacter === '') {
    return values;
  }

  if (values && values.length > 0) {
    return values.map((value) =>
      getRemoveLeadOrEndCharacter({
        character: {
          lead: leadCharacter,
        },
        value,
      }),
    );
  }

  return values;
};

export default removeLeadCharacterFromArrayOfStrings;
