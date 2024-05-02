type Payload = {
  item: any;
  list: Array<string>;
  sensitive: boolean;
};
const createUniqueList = (payload: Payload) => {
  const { item, list, sensitive = false } = payload;

  if (!sensitive) {
    const inSensitive = item.toLowerCase();
    const inSenstiveList = list.toString().toLowerCase();

    if (inSenstiveList.indexOf(inSensitive) === -1) {
      list.push(item);
      return;
    }
  }

  if (list.indexOf(item) === -1) {
    list.push(item);
  }
};

export default createUniqueList;
