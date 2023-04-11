import useCustomTranslation from '@/hooks/useCustomTranslation';
import { FormikErrors, FormikProps } from 'formik';
import React, { Children, useEffect } from 'react';
import styles from './FormFieldCheckbox.module.scss';
import {
  FormFieldsSelectFormValues,
  PartialSelectPlanFormValues,
  PaymentPeriod,
  SelectPlanFormValues,
} from '../types';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
  addonKey: number;
  addonTitle: string;
  addonDescription: string;
  price: number;
  paymentPeriod: PaymentPeriod;
}

const FormFieldCheckbox = (props: InputProps) => {
  const {
    checked,
    onChange,
    addonKey,
    addonTitle,
    addonDescription,
    price,
    paymentPeriod,
  } = props;

  return (
    <div className={styles.wrapper}>
      <div
        className={`tile flex items-center mb-4 ${checked ? 'selected' : ''}`}
        onClick={onChange}
      >
        <input
          id="default-checkbox"
          type="checkbox"
          value={0}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-100 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          checked={checked}
          onChange={onChange}
        />
        <div className="ml-4">
          <label
            htmlFor="default-checkbox"
            className="title text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            {addonTitle}
          </label>
          <p className="text-xs description">{addonDescription}</p>
        </div>
        <span className="price ml-auto">{`+$${price}/${
          paymentPeriod === 1 ? 'mo' : 'yr'
        }`}</span>
      </div>
    </div>
  );
};

export default FormFieldCheckbox;
