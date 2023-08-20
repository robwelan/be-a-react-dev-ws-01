/*
  Reading:
  https://stackoverflow.com/questions/26855423/how-to-require-a-specific-string-in-typescript-interface
  */

export enum enumControlCheckbox {
  CheckBox = 'checkbox',
}

export enum enumControlDates {
  Date = 'date',
  DateTime = 'datetime-local',
  Month = 'month',
  Time = 'time',
  Week = 'week',
}

export enum enumControlNumber {
  Number = 'number',
}

export enum enumControlRadio {
  Radio = 'radio',
}

export enum enumControlSelect {
  Select = 'select',
}

export enum enumControlStrings {
  Email = 'email',
  Password = 'password',
  Search = 'search',
  Telephone = 'tel',
  Text = 'text',
  TextArea = 'textarea',
  URL = 'url',
}

export enum enumDataTypesForHtml {
  Date = 'date',
  DateTime = 'datetime',
  ListString = 'liststring',
  Number = 'number',
  RichText = 'richtext',
  String = 'string',
  Time = 'time',
}

export const Controls = {
  ...enumControlCheckbox,
  ...enumControlDates,
  ...enumControlNumber,
  ...enumControlRadio,
  ...enumControlSelect,
  ...enumControlStrings,
};
export type Controls = keyof typeof Controls;

export const DataTypesForHtml = {
  ...enumDataTypesForHtml,
};
export type DataTypesForHtml = keyof typeof DataTypesForHtml;

export type SelectOptionsOption = {
  label: string;
  value: string;
};
