type Payload = {
  setValue: Function;
};

const clearFilterValue = (payload: Payload) => {
  const { setValue } = payload;

  setValue('');

  return null;
};
export default clearFilterValue;
