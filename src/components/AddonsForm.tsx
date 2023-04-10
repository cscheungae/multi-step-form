import React, { useState } from 'react';
import { FormikProps } from 'formik';
import {
  AddonsFormValues,
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
import FormFieldCheckbox from './FormFieldCheckbox';

export const AddonsForm = (props: {
  formik: FormikProps<AddonsFormValues>;
}) => {
  const { formik } = props;
  const { handleSubmit, setFieldValue, values, errors } = formik;
  const { tCapFirst } = useCustomTranslation('common');
  const [checkedVal, setCheckedVal] = useState([0]);

  const options: {
    addonKey: number;
    addonTitle: string;
    addonDescription: string;
    price: number;
  }[] = [
    {
      addonKey: 0,
      addonTitle: tCapFirst('form-addons-online-service-title'),
      addonDescription: tCapFirst('form-addons-online-service-description'),
      price: 10,
    },
    {
      addonKey: 1,
      addonTitle: tCapFirst('form-addons-larger-storage-title'),
      addonDescription: tCapFirst('form-addons-larger-storage-description'),
      price: 20,
    },
    {
      addonKey: 2,
      addonTitle: tCapFirst('form-addons-customizable-title'),
      addonDescription: tCapFirst('form-addons-customizable-description'),
      price: 20,
    },
  ];

  return (
    <form onSubmit={handleSubmit} className="mt-5">
      {options.map((option, i) => (
        <FormFieldCheckbox
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
