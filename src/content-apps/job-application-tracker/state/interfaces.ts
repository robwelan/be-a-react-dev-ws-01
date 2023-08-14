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

interface DefaultInterview {
  id: string;
  dates: {
    followup: DateConstructor | null;
    interview: DateConstructor | null;
  };
  research: string;
  thankyou: string;
  type: string;
}

interface State {
  id: string;
  dates: {
    applied: DateConstructor | null;
    deadline: DateConstructor | null;
    followup: DateConstructor | null;
    found: DateConstructor | null;
  };
  company: string;
  interviews: Array<DefaultInterview>;
  position: {
    contact: string;
    description: string;
    notes: string;
    status: string;
    title: string;
    uri: string;
  };
}

type SetState = Dispatch<SetStateAction<State>>;

export { DefaultInterview, SetState, State };
