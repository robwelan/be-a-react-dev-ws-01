import { Dispatch, SetStateAction } from 'react';

interface DateConstructor {
  new (): Date;
  new (value: number | string): Date;
  new (
    year: number,
    month: number,
    date?: number,
    hours?: number,
    minutes?: number,
    seconds?: number,
    ms?: number,
  ): Date;
}

export interface DefaultInterview {
  id: string;
  jobId: string;
  dates: string;
  research: string;
  thankyou: string;
  type: string;
}

interface State {
  id: string;
  dates: {
    applied: string;
    deadline: string;
    followup: string;
    found: string;
  };
  company: string;
  interviews: Array<DefaultInterview>;
  position: {
    contact: string;
    description: string;
    keywords: string;
    notes: string;
    status: string;
    title: string;
    uri: string;
  };
}

type SetState = Dispatch<SetStateAction<State>>;

export { DefaultInterview, SetState, State };
