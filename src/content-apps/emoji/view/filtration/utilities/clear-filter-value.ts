type Payload = {
  setValue: Function;
};

const clearFilterValue = (payload: Payload) => {
  const { setValue } = payload;

  setValue((prevState) => ({
    ...prevState,
    input: '',
  }));

  return null;
};

export default clearFilterValue;
