import React, {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { useFieldArray, useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//  hooks
import useKeyStrokeListener from '../../hooks/use-key-stroke-listener';
//  utilities
import utilitySetBackend from './utilities/set-backend';
import utilitySetValue from './utilities/set-value';
import getIsObjectValid from '../../utilities/objects/get-is-object-valid';

type ReactHookForm = {
  reactHookForm: {
    clearErrors: any;
    control: any;
    errors: object;
    getValues: Function;
    isDirty: boolean;
    isValid: boolean;
    register: Function;
    reset: Function;
    setValue: Function;
    fields: { touched: object };
    trigger: any;
    useFieldArray: Function;
    watch: object;
  };
};

type Props = {
  controls: {
    auto: {
      save?: boolean;
    };
    doc: {
      backend: object;
      data: object;
    };
    functions: {
      setBackend?: Function;
    };
    schema: {
      cast: Function;
    };
  };
  wrapped: {
    component: FC<PropsWithChildren<ReactHookForm>>;
    injections: object;
  };
};

type Data = object;

type HandleSetValuePayload = {
  target?: string;
  value: any;
  shouldDirty?: boolean;
  shouldValidate?: boolean;
};

const DocumentDataWithControls = (props: Props) => {
  const { controls, wrapped } = props;
  const { component: WrappedComponent, injections: wrappedInjections } =
    wrapped;
  const { doc, functions, schema } = controls;
  const [mounted, setMounted] = useState(false);
  const resolver = yupResolver(schema);
  const defaultValues = useMemo(() => schema.cast(doc.data), [doc.data]);

  const methodsUseForm = useForm({
    criteriaMode: 'firstError',
    // defaultValues: useMemo(() => ({ ...doc.data }), [doc.data]),
    defaultValues,
    // defaultValues: { ...originalData },
    mode: 'onChange',
    resolver,
    reValidateMode: 'onChange', // occurs after submit
    shouldFocusError: true,
    shouldUnregister: false,
  });

  const {
    clearErrors,
    getValues,
    reset,
    trigger,
    control,
    register,
    setValue,
    watch,
  } = methodsUseForm;
  const { dirtyFields, errors, isDirty, isValid, touchedFields } = useFormState(
    { control },
  );

  // eslint-disable-next-line no-console
  const onSubmit = (data: Data) => console.error(data);

  const handleSetBackend = () => {
    const isObjectValid = getIsObjectValid({ object: dirtyFields });

    if (isObjectValid) {
      if (typeof functions.setBackend === 'function') {
        utilitySetBackend({
          allFields: watch(),
          autoSave: controls.auto.save || true,
          doc,
          dirtyFields,
          set: functions.setBackend,
        });
      }
    }
  };

  const handleSetValue = (payload: HandleSetValuePayload) => {
    const {
      target = '',
      value,
      shouldDirty = true,
      shouldValidate = true,
    } = payload;

    utilitySetValue({
      setValue,
      shouldDirty,
      shouldValidate,
      target,
      value,
    });
  };

  useKeyStrokeListener({ callback: handleSetBackend });

  //  mounted effect
  useEffect(() => {
    setMounted(true);

    return () => {
      setMounted(false);
    };
  }, []);

  //  listen to data changes effect
  useEffect(() => {
    reset(doc.data, {
      keepErrors: true,
      keepDirty: true,
      keepDirtyValues: true,
      keepIsSubmitted: false,
      keepTouched: false,
      keepIsValid: false,
      keepSubmitCount: false,
    });
  }, [doc.data]);

  if (!mounted) return null;

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form autoComplete="off" onSubmit={methodsUseForm.handleSubmit(onSubmit)}>
      <WrappedComponent
        reactHookForm={{
          clearErrors,
          control,
          errors,
          getValues,
          isDirty,
          isValid,
          register,
          reset,
          setValue: handleSetValue,
          fields: { touched: touchedFields },
          trigger,
          useFieldArray,
          watch,
        }}
        {...wrappedInjections}
      />
    </form>
  );
};

export default DocumentDataWithControls;
