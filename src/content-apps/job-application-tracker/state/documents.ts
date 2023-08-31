import { format as dateFormat } from 'date-fns';

export const jobApplication = {
  id: '',
  company: '',
  dates: {
    applied: '',
    deadline: '',
    followup: '',
    found: dateFormat(new Date(), 'yyyy-MM-dd'),
  },
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

export const jobInterview = {
  id: '',
  jobApplicationId: '',
  date: dateFormat(new Date(), 'yyyy-MM-dd'),
  research: '',
  thankyou: '',
  type: 'interview', // or 'followup'
};
