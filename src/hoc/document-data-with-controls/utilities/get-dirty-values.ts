import { get as _Get, set as _Set } from 'lodash';
import getIsObjectValid from '../../../utilities/objects/get-is-object-valid';

type Payload = {
  allFields: object;
  dirtyFields: object;
};

const getDirtyValues = (payload: Payload) => {
  const { allFields, dirtyFields } = payload;
  const newObject = {
    record: {
      isUpdated: true,
      updatedAt: new Date(),
    },
  };

  const isValidAll = getIsObjectValid({ object: allFields });
  const isValidDirty = getIsObjectValid({ object: dirtyFields });

  try {
    if (!isValidAll) {
      throw new Error('all fields is not an object in getDirtyValues');
    }

    if (!isValidDirty) {
      throw new Error('dirty fields is not an object in getDirtyValues ');
    }

    const dirtyArrayKeys = Object.keys(dirtyFields);
    dirtyArrayKeys.forEach((key) => {
      const value = _Get(allFields, key);
      _Set(newObject, key, value);
    });

    return {
      dirtyObject: newObject,
      success: true,
    };
  } catch (error) {
    return {
      error,
      success: false,
    };
  }
};

export default getDirtyValues;
