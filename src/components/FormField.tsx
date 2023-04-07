import useCustomTranslation from '@/hooks/useCustomTranslation';
import { FormFieldsFormValues } from '../store/slices/formSlice';
import { FormikProps } from 'formik';
import React from 'react';
import styles from './FormField.module.scss';

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
  } = formik;

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
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[formKey]}
        className={styles.input}
        {...restProps}
        placeholder={tCapFirst(placeholderI18n)}
      />
    </div>
  );
};

export default FormField;
