import { RootState } from '@/store';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import usePersonalInfo from './usePersonalInfo';
import useSelectPlan from './useSelectPlan';
import { FormikProps } from 'formik';
import { FormStep } from '@/store/slices/formSlice';
import { render } from 'react-dom';
import useAddons from './useAddons';

function useForm(formStep: FormStep) {
  const form = useSelector((root: RootState) => root.form);
  const personalInfoFormHandlers = usePersonalInfo(form);
  const selectPlanHandlers = useSelectPlan(form);
  const addonsHandlers = useAddons(form);

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
    case 'addons': {
      renderForm = [...addonsHandlers];
      break;
    }
    default: {
      throw new Error('Unhandled formStep');
    }
  }

  return renderForm;
}

export default useForm;
