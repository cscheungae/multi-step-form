import React from 'react';
import { FormikProps } from 'formik';
import { PersonalInfoFormValues } from '../types';
import FormField from './FormField';

/**
 * @todo: Accessibility issue: Tab does not work for jumping between form input fields
 */

export const PersonalInfoForm = (props: {
  formik: FormikProps<PersonalInfoFormValues>;
}) => {
  const { formik } = props;
  const { handleSubmit } = formik;

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <FormField
        formKey={'name'}
        i18n={'form-yourInfo-name'}
        placeholderI18n={'placeholder-yourinfo-name'}
        formik={formik}
        type="text"
      />
      <FormField
        formKey={'email'}
        i18n={'form-yourInfo-emailAddr'}
        placeholderI18n="placeholder-yourinfo-email"
        formik={formik}
        type="email"
      />
      <FormField
        formKey={'phone'}
        i18n={'form-yourInfo-phoneNum'}
        formik={formik}
        placeholderI18n="placeholder-yourinfo-phone"
        type="tel"
      />
    </form>
  );
};
