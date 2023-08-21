import { format as dateFormat } from 'date-fns';
import { v4 as uuidv4 } from 'uuid';

const defaultInterview = {
  id: uuidv4(),
  jobId: '',
  date: dateFormat(new Date(), 'yyyy-MM-dd'),
  research: '',
  thankyou: '',
  type: 'interview', // or 'followup'
};

const defaultState = {
  id: uuidv4(),
  company: '',
  dates: {
    applied: '',
    deadline: '',
    followup: '',
    found: dateFormat(new Date(), 'yyyy-MM-dd'),
  },
  interviews: [defaultInterview],
  position: {
    contact: '',
    description: '',
    keywords: '',
    notes: '',
    status: '',
    title: '',
    uri: '',
  },
};

export default defaultState;
