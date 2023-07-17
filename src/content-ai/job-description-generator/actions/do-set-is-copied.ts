const doSetIsCopied = (payload) => {
  const { setState, value } = payload;

  setState((prevState) => ({
    ...prevState,
    booleans: {
      ...prevState.booleans,
      isCopied: value,
    },
  }));
};

export default doSetIsCopied;
