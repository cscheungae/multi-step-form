import { goNextStep, setPersonalInfo } from '@/store/slices/formSlice';
import { FormikProps, useFormik } from 'formik';
import React, { useEffect } from 'react';
import useCustomTranslation from '../useCustomTranslation';
import regExp from '@/helpers/regExp';
import { useDispatch } from 'react-redux';
import { PersonalInfoForm } from '@/components/PersonalInfoForm';
import { FormState, PersonalInfoFormValues } from '../../types';

function usePersonalInfo(form: FormState) {
  const dispatch = useDispatch();
  const { tCapFirst } = useCustomTranslation('common');
  const formik = useFormik({
    initialValues: { name: form.name, email: form.email, phone: form.phone },
    // initialValues: { name: '', email: '', phone: '' },
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
      dispatch(setPersonalInfo(values));
      dispatch(goNextStep());
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

  useEffect(() => {
    console.log(
      '%c usePersonalInfo rerender',
      'background: #222; color: #0dad40'
    );
  });

  useEffect(() => {
    console.log(
      '%c usePersonalInfo rerender',
      'background: #222; color: #ff2121'
    );
  }, [formik]);

  return [formik, PersonalInfoFormSection] as [
    FormikProps<PersonalInfoFormValues>,
    () => JSX.Element
  ];
}

export default usePersonalInfo;
