import {
  FormState,
  setSelectPlan,
  PlanLevel,
  PaymentPeriod,
  SelectPlanFormValues,
} from '@/store/slices/formSlice';
import { FormikProps, useFormik } from 'formik';
import React from 'react';
import useCustomTranslation from '../useCustomTranslation';
import regExp from '@/helpers/regExp';
import { useDispatch } from 'react-redux';
import { PersonalInfoForm } from '@/components/PersonalInfoForm';
import { PersonalInfoFormValues } from '../../store/slices/formSlice';
import { SelectPlanForm } from '@/components/SelectPlanForm';

function useSelectPlan(form: FormState) {
  const dispatch = useDispatch();
  const { tCapFirst } = useCustomTranslation('common');
  const formik = useFormik({
    initialValues: {
      planLevel: 0 as PlanLevel,
      paymentPeriod: 1 as PaymentPeriod,
    },
    validate: (values) => {
      const errors: any = {};
      // if (!values.name) {
      //   errors.name = tCapFirst('form-validation-error-required');
      // }
      // if (!values.email) {
      //   errors.email = tCapFirst('form-validation-error-required');
      // } else if (!RegExp(regExp.email, 'i').test(values.email)) {
      //   errors.email = tCapFirst('form-validation-error-invalid-email');
      // }

      // if (!values.phone) {
      //   errors.phone = tCapFirst('form-validation-error-required');
      // } else if (!RegExp(regExp.phone, 'im').test(values.phone)) {
      //   errors.phone = tCapFirst('form-validation-error-invalid-phone');
      // }

      return errors;
    },
    onSubmit: (values, { setSubmitting }) => {
      console.log(values);
      dispatch(setSelectPlan(values));
    },
  });

  const SelectPlanFormSection = () => {
    return (
      <>
        <h1 className="formTitle">{tCapFirst('form-selectPlan-title')}</h1>
        <p className="formDescription">
          {tCapFirst('form-selectPlan-description')}
        </p>
        {/* <PersonalInfoForm {...{ formik }} /> */}
        <SelectPlanForm {...{ formik }} />
      </>
    );
  };

  return [formik, SelectPlanFormSection] as [
    FormikProps<SelectPlanFormValues>,
    () => JSX.Element
  ];
}

export default useSelectPlan;
