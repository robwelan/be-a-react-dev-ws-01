import getDirtyValues from './get-dirty-values';
import setDocumentByRef from '../../../lib/actions/set-document-by-ref';
//  utilities
import getIsObjectValid from '../../../utilities/objects/get-is-object-valid';

type Payload = {
  allFields: object;
  autoSave?: boolean;
  backend?: {
    ref?: object;
  };
  dirtyFields: object;
};

type DirtyValues = {
  error: {
    message?: string;
  };
  dirtyObject?: object;
  success?: boolean;
};

const setBackend = async (payload: Payload) => {
  const { allFields, autoSave = true, backend = {}, dirtyFields } = payload;

  try {
    const dirtyValues = getDirtyValues({
      allFields,
      dirtyFields,
    }) as DirtyValues;

    if (dirtyValues.success && autoSave) {
      const { ref: docRef } = backend;
      const isValidRef = getIsObjectValid({ object: docRef });

      if (!isValidRef) {
        throw new Error(
          'The docRef passed in to updateBackend is not a valid object.',
        );
      }

      const result = await setDocumentByRef({
        docRef,
        updates: dirtyValues.dirtyObject,
      });

      if (!result.success) {
        throw new Error('set document by ref failed in update backend');
      }

      return {
        success: true,
      };
    }

    if (!dirtyValues.success) {
      throw new Error(
        dirtyValues.error.message ||
          'The dirty values object came back with a strange error in update backend.',
      );
    }

    return {
      error: 'unknown result.',
      success: false,
    };
  } catch (error) {
    return {
      error,
      success: false,
    };
  }
};

export default setBackend;
