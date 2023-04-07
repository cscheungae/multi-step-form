import { FormState, setPersonalInfo } from '@/store/slices/formSlice';
import { FormikProps, useFormik } from 'formik';
import React from 'react';
import useCustomTranslation from '../useCustomTranslation';
import regExp from '@/helpers/regExp';
import { useDispatch } from 'react-redux';
import { PersonalInfoForm } from '@/components/PersonalInfoForm';
import { PersonalInfoFormValues } from '../../store/slices/formSlice';

function usePersonalInfo(form: FormState) {
  const dispatch = useDispatch();
  const { tCapFirst } = useCustomTranslation('common');
  const formik = useFormik({
    initialValues: { name: form.name, email: form.email, phone: form.phone },
    validate: (values) => {
      const errors: any = {};
      if (!values.name) {
        errors.name = tCapFirst('form-validation-error-required');
      }
      if (!values.email) {
        errors.email = tCapFirst('form-validation-error-required');
      } else if (!RegExp(regExp.email, 'i').test(values.email)) {
        errors.email = tCapFirst('form-validation-error-invalid-email');
      }

      if (!values.phone) {
        errors.phone = tCapFirst('form-validation-error-required');
      } else if (!RegExp(regExp.phone, 'im').test(values.phone)) {
        errors.phone = tCapFirst('form-validation-error-invalid-phone');
      }

      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      dispatch(setPersonalInfo(values));
    },
  });

  const PersonalInfoFormSection = () => {
    return (
      <>
        <h1 className="formTitle">{tCapFirst('form-yourInfo-personalInfo')}</h1>
        <p className="formDescription">
          {tCapFirst('form-yourInfo-description')}
        </p>
        <PersonalInfoForm {...{ formik }} />
      </>
    );
  };

  return [formik, PersonalInfoFormSection] as [
    FormikProps<PersonalInfoFormValues>,
    () => JSX.Element
  ];
}

export default usePersonalInfo;
