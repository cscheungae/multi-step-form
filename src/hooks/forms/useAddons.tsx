import {
  FormState,
  setSelectPlan,
  PlanLevel,
  PaymentPeriod,
  SelectPlanFormValues,
  PartialSelectPlanFormValues,
  goNextStep,
  AddonsFormValues,
  setAddons,
} from '@/store/slices/formSlice';
import { FormikProps, useFormik } from 'formik';
import React from 'react';
import useCustomTranslation from '../useCustomTranslation';
import regExp from '@/helpers/regExp';
import { useDispatch } from 'react-redux';
import { PersonalInfoForm } from '@/components/PersonalInfoForm';
import { PersonalInfoFormValues } from '../../store/slices/formSlice';
import { AddonsForm } from '@/components/AddonsForm';

function useAddons(form: FormState) {
  const dispatch = useDispatch();
  const { tCapFirst } = useCustomTranslation('common');
  const formik = useFormik({
    initialValues: { addons: form.addons } as AddonsFormValues,
    validate: (values: any) => {},
    onSubmit: (values, { setSubmitting }) => {
      dispatch(setAddons(values));
      dispatch(goNextStep());
    },
  });

  const AddonsFormSection = () => {
    return (
      <>
        <h1 className="formTitle">{tCapFirst('form-addons-title')}</h1>
        <p className="formDescription">
          {tCapFirst('form-addons-description')}
        </p>
        <AddonsForm {...{ formik }} />
      </>
    );
  };

  return [formik, AddonsFormSection] as [
    FormikProps<AddonsFormValues>,
    () => JSX.Element
  ];
}

export default useAddons;
