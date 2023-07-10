const doSetIsGenerating = (payload) => {
  const { setState, value } = payload;

  setState((prevState) => ({
    ...prevState,
    booleans: {
      ...prevState.booleans,
      isGenerating: value,
    },
  }));
};

export default doSetIsGenerating;
