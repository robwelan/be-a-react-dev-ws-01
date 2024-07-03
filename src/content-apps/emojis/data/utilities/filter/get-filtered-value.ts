type GetFilteredValuePayload = {
  input: string;
  group: string;
  subgroup: string;
};

const getFilteredValue = (payload: GetFilteredValuePayload) => {
  const { input, group, subgroup } = payload;

  if (input === '' && group === '' && subgroup === '') {
    return false;
  }

  return true;
};

export default getFilteredValue;
