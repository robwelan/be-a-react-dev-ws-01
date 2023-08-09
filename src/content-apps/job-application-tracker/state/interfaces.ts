import { Dispatch, SetStateAction } from 'react';

interface DefaultInterview {
  id: string;
  dates: {
    followup?: Date;
    interview?: Date;
  };
  research: string;
  thankyou: string;
  type: string;
}

interface State {
  id: string;
  dates: {
    applied?: Date;
    deadline?: Date;
    followup?: Date;
    found?: Date;
  };
  company: string;
  interviews?: [DefaultInterview];
  position: {
    contact: string;
    description: string;
    notes: string;
    status: string;
    title: string;
  };
}

type SetState = Dispatch<SetStateAction<State>>;

export { DefaultInterview, SetState, State };
