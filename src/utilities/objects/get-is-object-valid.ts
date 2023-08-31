type Payload = {
  object?: any;
};

const getIsObjectValid = (payload: Payload) => {
  const { object } = payload;

  if (object instanceof Array) return false;
  if (typeof object === 'undefined') return false;
  if (object === null) return false;
  if (Object.keys(object).length === 0 && object.constructor === Object)
    return false;

  return true;
};

export default getIsObjectValid;
