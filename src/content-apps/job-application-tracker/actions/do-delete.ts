import { JobApplication, JobInterview } from '../state/interfaces-and-types';

type Payload = {
  collection: any;
  document: JobApplication | JobInterview;
};

const doDelete = (payload: Payload) => {
  const { collection, document } = payload;
  const { id } = document;

  collection.deleteMany({ id });

  return { success: true };
};

export default doDelete;
