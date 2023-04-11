import React from 'react';
import { FormikProps } from 'formik';
import {
  PartialSelectPlanFormValues,
  PaymentPeriod,
  PlanLevel,
} from '../types';
import FormFieldSelect from './FormFieldSelect';
import PlanLevelSVG0 from '../../assets/images/icon-arcade.svg';
import PlanLevelSVG1 from '../../assets/images/icon-advanced.svg';
import PlanLevelSVG2 from '../../assets/images/icon-pro.svg';
import useCustomTranslation from '@/hooks/useCustomTranslation';
import OptionTile from './OptionTile';
import FormFieldToggle from './FormFieldToggle';
import planOptions from '../data/planOptions';

export const SelectPlanForm = (props: {
  formik: FormikProps<PartialSelectPlanFormValues>;
}) => {
  const { formik } = props;
  const { handleSubmit, setFieldValue, values, errors } = formik;
  const { tCapFirst } = useCustomTranslation('common');

  const options = planOptions.map((option) => ({
    ...option,
    planName: tCapFirst(option.planName),
  }));

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      <FormFieldSelect
        formKey={'planLevel'}
        i18n=""
        placeholderI18n=""
        // formik={formik}
        errors={errors}
      >
        <>
          {options
            .filter((el) => el.paymentPeriod === values.paymentPeriod)
            .map((optionProps, i) => (
              <OptionTile
                key={i}
                {...optionProps}
                setFieldValue={setFieldValue}
                selected={values.planLevel === optionProps.planLevel}
              />
            ))}
        </>
      </FormFieldSelect>
      <FormFieldToggle
        checked={values.paymentPeriod === 12}
        onChange={(e) =>
          setFieldValue('paymentPeriod', values.paymentPeriod === 1 ? 12 : 1)
        }
        options={[
          tCapFirst('form-selectPlan-paymentPeriod-month'),
          tCapFirst('form-selectPlan-paymentPeriod-year'),
        ]}
      />
    </form>
  );
};
