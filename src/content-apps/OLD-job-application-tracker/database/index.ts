import { createLocalStorageAdapter, Collection } from 'signaldb';

const jat = new Collection({
  persistence: createLocalStorageAdapter('jat'),
});

export default jat;
