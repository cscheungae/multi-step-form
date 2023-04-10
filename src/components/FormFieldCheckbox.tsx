import useCustomTranslation from '@/hooks/useCustomTranslation';
import { FormikErrors, FormikProps } from 'formik';
import React, { Children, useEffect } from 'react';
import styles from './FormFieldCheckbox.module.scss';
import {
  FormFieldsSelectFormValues,
  PartialSelectPlanFormValues,
  SelectPlanFormValues,
} from '@/store/slices/formSlice';
import PlanLevelSVG0 from '../../assets/images/icon-arcade.svg';
import PlanLevelSVG1 from '../../assets/images/icon-advanced.svg';
import PlanLevelSVG2 from '../../assets/images/icon-pro.svg';

import Image from 'next/image';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
  onChange: () => void;
  addonKey: number;
  addonTitle: string;
  addonDescription: string;
  price: number;
}

const FormFieldCheckbox = (props: InputProps) => {
  const { checked, onChange, addonKey, addonTitle, addonDescription, price } =
    props;

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
        <span className="price ml-auto">{`+$${price}/yr`}</span>
      </div>
    </div>
  );
};

export default FormFieldCheckbox;
