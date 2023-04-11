import React, { useState } from 'react';
import { FormikProps } from 'formik';
import useCustomTranslation from '@/hooks/useCustomTranslation';
import FormFieldCheckbox from './FormFieldCheckbox';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import {
  AddonsFormValues,
  PartialSelectPlanFormValues,
  PaymentPeriod,
  PlanLevel,
} from '../types';
import addonsOptions from '../data/addonsOptions';

export const AddonsForm = (props: {
  formik: FormikProps<AddonsFormValues>;
}) => {
  const selectedPaymentPeriod = useSelector(
    (state: RootState) => state.form.paymentPeriod
  );
  const { formik } = props;
  const { handleSubmit, setFieldValue, values } = formik;
  const { tCapFirst } = useCustomTranslation('common');

  const options = addonsOptions.map((option) => ({
    ...option,
    addonTitle: tCapFirst(option.addonTitle),
  }));

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      {options
        .filter((el) => el.paymentPeriod === selectedPaymentPeriod)
        .map((option, i) => (
          <FormFieldCheckbox
            key={i}
            {...option}
            checked={values.addons.includes(option.addonKey)}
            onChange={() => {
              if (values.addons.includes(option.addonKey)) {
                setFieldValue(
                  'addons',
                  values.addons.filter((el) => el !== option.addonKey)
                );
              } else {
                setFieldValue('addons', [...values.addons, option.addonKey]);
              }
            }}
          />
        ))}
    </form>
  );
};
