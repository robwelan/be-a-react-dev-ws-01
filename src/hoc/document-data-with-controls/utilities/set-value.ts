import dispatchKeyUp from './dispatch-key-up-event';

type Payload = {
  setValue: Function;
  shouldDirty?: boolean;
  shouldValidate?: boolean;
  target?: string;
  value: any;
};

const utilitySetValue = (payload: Payload) => {
  const {
    setValue,
    shouldDirty = true,
    shouldValidate = true,
    target = '',
    value,
  } = payload;

  try {
    if (target !== '') {
      setValue(target, value, {
        shouldDirty,
        shouldValidate,
      });

      dispatchKeyUp();
    } else {
      const customError = `${target} (target) is not a valid path / string.`;

      throw customError;
    }

    return { success: true };
  } catch (error) {
    return { success: false, error };
  }
};

export default utilitySetValue;
