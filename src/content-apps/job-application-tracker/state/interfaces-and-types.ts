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

export interface JobInterview {
  id: string;
  jobApplicationId: string;
  jobId: string;
  dates: string;
  research: string;
  thankyou: string;
  type: string;
}

export interface JobApplication {
  id: string;
  dates: {
    applied: string;
    deadline: string;
    followup: string;
    found: string;
  };
  company: string;
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
