import useCustomTranslation from '@/hooks/useCustomTranslation';
import { FormFieldsFormValues } from '../store/slices/formSlice';
import { FormikProps } from 'formik';
import React, { useCallback, useState } from 'react';
import styles from './FormField.module.scss';
import _, { debounce } from 'lodash';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formKey: keyof FormFieldsFormValues;
  i18n: string;
  placeholderI18n: string;
  formik: FormikProps<FormFieldsFormValues>;
}

const FormField = (props: InputProps) => {
  const { tCapFirst } = useCustomTranslation('common');
  const { formKey, formik, i18n, placeholderI18n, ...restProps } = props;
  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    setFieldValue,
    setFieldTouched,
  } = formik;

  // const debounceHandleChange = useCallback(_.debounce(handleChange, 200), [
  //   handleChange,
  // ]);

  const debounceHandleChange = _.debounce(handleChange, 200);
  const [val, setVal] = useState(values[formKey]);

  return (
    <div className="my-4">
      <div className="flex justify-between">
        <label className="block text-xs" htmlFor={formKey}>
          {tCapFirst(i18n)}
        </label>
        <span className="text-xs text-red-600">
          {errors[formKey] && touched[formKey] && errors[formKey]}
        </span>
      </div>
      <input
        name={formKey}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        onBlur={(e) => {
          setFieldValue(formKey, val);
        }}
        value={val}
        className={styles.input}
        {...restProps}
        placeholder={tCapFirst(placeholderI18n)}
      />
    </div>
  );
};

export default FormField;
