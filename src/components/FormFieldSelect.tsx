import useCustomTranslation from '@/hooks/useCustomTranslation';
import { FormikProps } from 'formik';
import React from 'react';
import styles from './FormField.module.scss';
import { FormFieldsSelectFormValues } from '@/store/slices/formSlice';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  formKey: keyof FormFieldsSelectFormValues;
  i18n: string;
  placeholderI18n: string;
  formik: FormikProps<FormFieldsSelectFormValues>;
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
      <div></div>
    </div>
  );
};

export default FormField;
