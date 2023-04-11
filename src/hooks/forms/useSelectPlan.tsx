import { setSelectPlan, goNextStep, setAddons } from '@/store/slices/formSlice';
import {
  FormState,
  PlanLevel,
  PaymentPeriod,
  SelectPlanFormValues,
  PartialSelectPlanFormValues,
  PersonalInfoFormValues,
} from '../../types';
import { FormikProps, useFormik } from 'formik';
import React from 'react';
import useCustomTranslation from '../useCustomTranslation';
import regExp from '@/helpers/regExp';
import { useDispatch } from 'react-redux';
import { PersonalInfoForm } from '@/components/PersonalInfoForm';
import { SelectPlanForm } from '@/components/SelectPlanForm';

function useSelectPlan(form: FormState) {
  const dispatch = useDispatch();
  const { tCapFirst } = useCustomTranslation('common');
  const formik = useFormik({
    initialValues: { paymentPeriod: 1 } as PartialSelectPlanFormValues,
    validate: (values: any) => {
      const errors: any = {};
      if (!Number.isInteger(values?.planLevel)) {
        errors.planLevel = tCapFirst('form-validation-error-required');
      }
      if (!Number.isInteger(values?.paymentPeriod)) {
        errors.paymentPeriod = tCapFirst('form-validation-error-required');
      }

      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      dispatch(setAddons([]));
      dispatch(setSelectPlan(values as SelectPlanFormValues));
      dispatch(goNextStep());
    },
  });

  const SelectPlanFormSection = () => {
    return (
      <>
        <h1 className="formTitle">{tCapFirst('form-selectPlan-title')}</h1>
        <p className="formDescription">
          {tCapFirst('form-selectPlan-description')}
        </p>
        <SelectPlanForm {...{ formik }} />
      </>
    );
  };

  return [formik, SelectPlanFormSection] as [
    FormikProps<PartialSelectPlanFormValues>,
    () => JSX.Element
  ];
}

export default useSelectPlan;
