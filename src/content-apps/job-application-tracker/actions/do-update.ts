import { JobApplication, JobInterview } from '../state/interfaces-and-types';

type Payload = {
  collection: any;
  document: JobApplication | JobInterview;
};

const doUpdate = (payload: Payload) => {
  const { collection, document } = payload;
  const { id, ...restOfDocument } = document;

  collection.updateMany(
    { id },
    {
      $set: { ...restOfDocument },
    },
  );

  return { success: true };
};

export default doUpdate;
