import { RootState } from '@/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import usePersonalInfo from './usePersonalInfo';
import useSelectPlan from './useSelectPlan';
import { FormikProps } from 'formik';
import { FormStep } from '@/store/slices/formSlice';

function useForm(formStep: FormStep) {
  const form = useSelector((root: RootState) => root.form);
  const personalInfoFormHandlers = usePersonalInfo(form);
  const selectPlanHandlers = useSelectPlan(form);

  useEffect(() => {
    console.log('Mount useForm');
    return () => {
      console.log('Unmount useForm');
    };
  }, []);

  let renderForm: [FormikProps<any>, () => JSX.Element];

  switch (formStep) {
    case 'personalInfo': {
      renderForm = [...personalInfoFormHandlers];
      break;
    }
    case 'selectPlan': {
      renderForm = [...selectPlanHandlers];
      break;
    }
    default: {
      throw new Error('Unhandled formStep');
    }
  }

  return renderForm;
}

export default useForm;
