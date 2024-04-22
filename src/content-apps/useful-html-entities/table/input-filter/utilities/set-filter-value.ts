type Payload = {
  value: string;
  setValue: Function;
};

const setFilterValue = (payload: Payload) => {
  const { value = '', setValue } = payload;

  setValue(value);

  return null;
};

export default setFilterValue;
