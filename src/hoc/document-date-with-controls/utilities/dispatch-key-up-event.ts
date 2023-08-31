type EventTypes = {
  shiftKey?: boolean;
};

const dispatchKeyUp = () => {
  const e = new Event('keyup');
  (<EventTypes>e).shiftKey = true;
  document.dispatchEvent(e);
};

export default dispatchKeyUp;
