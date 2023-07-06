import { get as _Get, set as _Set } from 'lodash';

const doValidateString = (payload) => {
  const { key, object } = payload;
  const keyValidation = 'validation';
  const keyTouched = `${keyValidation}.touched`;

  const value = _Get(object, key, '');
  const touched = _Get(object, keyTouched);

  if (touched && value === '') {
    _Set(object, `${keyValidation}.${key}`, false);
  }

  if (touched && value !== '') {
    _Set(object, `${keyValidation}.${key}`, true);
  }

  if (!touched) {
    _Set(object, keyTouched, true);
  }
};

export default doValidateString;
