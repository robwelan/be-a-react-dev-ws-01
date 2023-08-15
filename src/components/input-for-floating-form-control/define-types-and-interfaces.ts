/*
  Reading:
  https://stackoverflow.com/questions/26855423/how-to-require-a-specific-string-in-typescript-interface
  */

export enum ControlDates {
  Date = 'date',
  DateTime = 'datetime-local',
  Month = 'month',
  Time = 'time',
  Week = 'week',
}

export interface InterfaceControlDates {
  param: ControlDates;
}

type ControlCheckbox = 'checkbox';
type ControlDate = 'date' | 'datetime-local' | 'month' | 'time' | 'week';
type ControlNumber = 'number';
type ControlRadio = 'radio';
type ControlSelect = 'select';
type ControlString = 'email' | 'password' | 'search' | 'tel' | 'text' | 'url';
type Control =
  | ControlCheckbox
  | ControlDate
  | ControlRadio
  | ControlSelect
  | ControlString;

type DataTypeDate = 'date';
type DataTypeDateTime = 'datetime';
type DataTypeNumber = 'number';
type DataTypeString = 'string';
type DataTypeTime = 'time';

type DataType =
  | DataTypeDate
  | DataTypeDateTime
  | DataTypeNumber
  | DataTypeString
  | DataTypeTime;

type PropsOptionsOption = {
  label: string;
  value: string;
};

export {
  Control,
  ControlCheckbox,
  ControlDate,
  ControlNumber,
  ControlRadio,
  ControlSelect,
  ControlString,
  DataType,
  DataTypeDate,
  DataTypeDateTime,
  DataTypeNumber,
  DataTypeString,
  DataTypeTime,
  PropsOptionsOption,
};
