import React from 'react';
import { FormikProps } from 'formik';
import { SelectPlanFormValues } from '../store/slices/formSlice';
import FormFieldSelect from './FormFieldSelect';

export const SelectPlanForm = (props: {
  formik: FormikProps<SelectPlanFormValues>;
}) => {
  const { formik } = props;
  const { handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <FormFieldSelect
        formKey={'planLevel'}
        i18n=""
        placeholderI18n=""
        formik={formik}
      />
    </form>
  );
};
