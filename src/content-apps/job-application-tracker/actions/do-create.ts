import { JobApplication, JobInterview } from '../state/interfaces-and-types';

type Payload = {
  collection: any;
  document: JobApplication | JobInterview;
};

const doCreate = (payload: Payload) => {
  const { collection, document } = payload;

  const documentId = collection.insert({ ...document });

  return { id: documentId };
};

export default doCreate;
