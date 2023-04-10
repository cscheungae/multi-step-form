import React from 'react';
import { FormikProps } from 'formik';
import {
  PartialSelectPlanFormValues,
  PlanLevel,
} from '../store/slices/formSlice';
import FormFieldSelect from './FormFieldSelect';
import PlanLevelSVG0 from '../../assets/images/icon-arcade.svg';
import PlanLevelSVG1 from '../../assets/images/icon-advanced.svg';
import PlanLevelSVG2 from '../../assets/images/icon-pro.svg';
import useCustomTranslation from '@/hooks/useCustomTranslation';
import OptionTile from './OptionTile';
import FormFieldToggle from './FormFieldToggle';

export const SelectPlanForm = (props: {
  formik: FormikProps<PartialSelectPlanFormValues>;
}) => {
  const { formik } = props;
  const { handleSubmit, setFieldValue, values, errors } = formik;
  const { tCapFirst } = useCustomTranslation('common');

  const options: {
    planLevel: PlanLevel;
    planName: string;
    price: number;
    bonusMonths: number;
    svgSrc: any;
  }[] = [
    {
      planLevel: 0,
      planName: tCapFirst('form-selectPlan-planLevel-0'),
      price: 90,
      bonusMonths: 2,
      svgSrc: PlanLevelSVG0,
    },
    {
      planLevel: 1,
      planName: tCapFirst('form-selectPlan-planLevel-1'),
      price: 120,
      bonusMonths: 2,
      svgSrc: PlanLevelSVG1,
    },
    {
      planLevel: 2,
      planName: tCapFirst('form-selectPlan-planLevel-2'),
      price: 150,
      bonusMonths: 2,
      svgSrc: PlanLevelSVG2,
    },
  ];

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
          {options.map((optionProps, i) => (
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
