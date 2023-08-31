import React, { useEffect, useMemo, useState } from 'react';
import { useFieldArray, useForm, useFormState } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
//  hooks
import useKeyStrokeListener from '../../hooks/use-key-stroke-listener';
//  utilities
import utilitySetBackend from './utilities/set-backend';
import utilitySetValue from './utilities/set-value';
import getIsObjectValid from '../../utilities/objects/get-is-object-valid';

const DocumentDataWithControls = (props) => {
  const { controls, wrapped } = props;
  const { injections: wrappedInjections, component: WrappedComponent } =
    wrapped;
  const { doc, schema, settings } = controls;
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
    // formState: {
    //   dirtyFields,
    //   errors: formStateErrors,
    //   isDirty,
    //   isSubmitted,
    //   isSubmitSuccessful,
    //   isValid,
    //   isValidating,
    //   submitCount,
    //   touchedFields,
    // },
    clearErrors,
    getValues,
    // formState: { dirtyFields, errors, isDirty, isValid, touchedFields },
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
  const onSubmit = (data) => console.error(data);

  const handleSetBackend = () => {
    const isObjectValid = getIsObjectValid({ object: dirtyFields });

    if (isObjectValid) {
      utilitySetBackend({
        allFields: watch(),
        autoSave: controls.auto.save || true,
        backend: doc.backend,
        dirtyFields,
      });
    }
  };

  const handleSetValue = (payload) => {
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
