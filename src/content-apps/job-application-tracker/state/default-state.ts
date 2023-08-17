import { format as dateFormat } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

const defaultInterview = {
  id: uuidv4(),
  dates: {
    followup: '',
    interview: '',
  },
  research: '',
  thankyou: '',
  type: '',
};

const defaultState = {
  id: uuidv4(),
  dates: {
    applied: '',
    deadline: '',
    followup: '',
    found: dateFormat(new Date(), 'yyyy-MM-dd'),
  },
  company: '',
  interviews: [defaultInterview],
  position: {
    contact: '',
    description: '',
    notes: '',
    status: '',
    title: '',
    uri: '',
  },
};

export default defaultState;
