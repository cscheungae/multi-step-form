import { setSelectPlan, goNextStep, setAddons } from '@/store/slices/formSlice';
import {
  AddonsFormValues,
  FormState,
  PlanLevel,
  PaymentPeriod,
  SelectPlanFormValues,
  PartialSelectPlanFormValues,
  PersonalInfoFormValues,
} from '../../types';
import { FormikProps, useFormik } from 'formik';
import React, { useEffect } from 'react';
import useCustomTranslation from '../useCustomTranslation';
import regExp from '@/helpers/regExp';
import { useDispatch } from 'react-redux';
import { PersonalInfoForm } from '@/components/PersonalInfoForm';
import { AddonsForm } from '@/components/AddonsForm';
import _ from 'lodash';

function useAddons(form: FormState) {
  const dispatch = useDispatch();
  const { tCapFirst } = useCustomTranslation('common');
  const formik = useFormik({
    initialValues: { addons: form.addons } as AddonsFormValues,
    validate: (values: any) => {},
    onSubmit: (values, { setSubmitting }) => {
      dispatch(setAddons(values.addons));
      dispatch(goNextStep());
    },
  });

  useEffect(() => {
    if (_.isEqual(form.addons, formik.values.addons)) {
      formik.setFieldValue('addons', form.addons);
    }
  }, [form.addons, formik.values.addons]);

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
