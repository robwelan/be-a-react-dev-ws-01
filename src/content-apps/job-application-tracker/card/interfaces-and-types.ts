import { FC } from 'react';
// types and interfaces
import { DefaultInterview } from '../state/interfaces';
import { SelectOptionsOption } from '../../../components/input-for-floating-form-control/define-types-and-interfaces';

export type PayloadHandleOnChange = {
  target: {
    value: string;
  };
};

type Field = {
  defaultValue?: string;
  key?: string;
  helper?: string;
  isRequired?: boolean;
  isInvalid?: boolean;
  label?: string;
  options?: Array<SelectOptionsOption>;
  placeholder?: string;
  type: {
    display?: string;
    control: string;
    data: string;
  };
  value?: string;
};

export type PropsStandardInput = {
  as?: FC;
  field: Field;
  handler: Function;
};

export type PropsMain = {
  fields: {
    company: Field;
    dates: {
      applied: Field;
      deadline: Field;
      followup: Field;
      found: Field;
    };
    interviews: Array<DefaultInterview>;
    position: {
      contact: Field;
      description: Field;
      keywords: Field;
      status: Field;
      notes: Field;
      title: Field;
      uri: Field;
    };
  };
  handler: Function;
};
