import getDirtyValues from './get-dirty-values';
// import setDocumentByRef from '../../../lib/actions/set-document-by-ref';
//  utilities
import getIsObjectValid from '../../../utilities/objects/get-is-object-valid';

type Payload = {
  allFields: object;
  autoSave?: boolean;
  doc: object;
  dirtyFields: object;
  set: Function;
};

type DirtyValues = {
  error: {
    message?: string;
  };
  dirtyObject?: object;
  success?: boolean;
};

const setBackend = async (payload: Payload) => {
  const {
    allFields,
    autoSave = true,
    doc = {},
    dirtyFields,
    set = () => {},
  } = payload;

  try {
    const dirtyValues = getDirtyValues({
      allFields,
      dirtyFields,
    }) as DirtyValues;

    if (dirtyValues.success && autoSave) {
      const isValidDoc = getIsObjectValid({ object: doc });

      if (!isValidDoc) {
        throw new Error(
          'The doc passed in to updateBackend is not a valid object.',
        );
      }

      const result = await set({ doc, updates: dirtyValues.dirtyObject });

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
