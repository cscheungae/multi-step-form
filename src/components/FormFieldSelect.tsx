import useCustomTranslation from '@/hooks/useCustomTranslation';
import { FormikErrors, FormikProps } from 'formik';
import React, { Children, useEffect } from 'react';
import styles from './FormFieldSelect.module.scss';
import {
  FormFieldsSelectFormValues,
  PartialSelectPlanFormValues,
  SelectPlanFormValues,
} from '@/store/slices/formSlice';
import PlanLevelSVG0 from '../../assets/images/icon-arcade.svg';
import PlanLevelSVG1 from '../../assets/images/icon-advanced.svg';
import PlanLevelSVG2 from '../../assets/images/icon-pro.svg';

import Image from 'next/image';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  formKey: keyof FormFieldsSelectFormValues;
  i18n: string;
  placeholderI18n: string;
  // formik: FormikProps<PartialSelectPlanFormValues>;
  errors: FormikErrors<Partial<PartialSelectPlanFormValues>>;
}

const FormFieldSelect = (props: InputProps) => {
  const { tCapFirst } = useCustomTranslation('common');
  const { children, formKey, i18n, placeholderI18n, errors } = props;

  return (
    <div className={styles.wrapper}>
      <div className="flex justify-between">
        <label className="block text-xs" htmlFor={formKey}>
          {tCapFirst(i18n)}
        </label>
        <span className="text-xs text-red-600">{errors[formKey]}</span>
      </div>
      {children}
    </div>
  );
};

export default FormFieldSelect;
