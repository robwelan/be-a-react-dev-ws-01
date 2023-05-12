const getWindow = () => {
  const windowGlobal = typeof window !== 'undefined' && window;

  return windowGlobal;
};

export default getWindow;
