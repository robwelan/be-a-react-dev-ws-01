export type Case = {
  case: string;
  headline: string;
  id: number;
};

export type Felony = {
  caseId: number;
  count: number;
  what: string;
};
