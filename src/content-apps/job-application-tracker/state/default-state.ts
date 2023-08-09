import { v4 as uuidv4 } from 'uuid';

const defaultInterview = {
  id: uuidv4(),
  dates: {
    followup: null,
    interview: null,
  },
  research: '',
  thankyou: '',
  type: '',
};

const defaultState = {
  id: uuidv4(),
  dates: {
    applied: null,
    deadline: null,
    followup: null,
    found: null,
  },
  company: '',
  interviews: [defaultInterview],
  position: {
    contact: '',
    description: '',
    notes: '',
    status: '',
    title: '',
  },
};

export default defaultState;
