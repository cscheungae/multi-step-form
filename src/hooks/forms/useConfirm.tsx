import {
  setSelectPlan,
  goNextStep,
  setAddons,
  setCompleted,
} from '@/store/slices/formSlice';
import {
  FormState,
  AddonsFormValues,
  PlanLevel,
  PaymentPeriod,
  SelectPlanFormValues,
  PartialSelectPlanFormValues,
  PersonalInfoFormValues,
} from '../../types';
import { FormikProps, useFormik } from 'formik';
import React from 'react';
import useCustomTranslation from '../useCustomTranslation';
import regExp from '@/helpers/regExp';
import { useDispatch } from 'react-redux';
import { PersonalInfoForm } from '@/components/PersonalInfoForm';
import { AddonsForm } from '@/components/AddonsForm';
import ConfirmForm from '@/components/ConfirmForm';
import styles from './useConfirm.module.scss';
import Image from 'next/image';
import ThankYouSVG from '../../../assets/images/icon-thank-you.svg';

function useAddons(form: FormState) {
  const dispatch = useDispatch();
  const { tCapFirst, t } = useCustomTranslation('common');
  const formik = useFormik({
    initialValues: { addons: form.addons } as AddonsFormValues,
    validate: (values: any) => {},
    onSubmit: (values, { setSubmitting }) => {
      dispatch(setCompleted({ completed: true }));
    },
  });

  const AddonsFormSection = () => {
    return (
      <>
        {form.completed ? (
          <div className={styles.thankYou}>
            <Image height={55} width={55} src={ThankYouSVG} alt="thank you" />
            <div className={styles.thankYouTitle}>{tCapFirst('thank-you')}</div>
            <div className={styles.thankYouDesc}>{t('thank-you-message')}</div>
          </div>
        ) : (
          <>
            <h1 className="formTitle">{tCapFirst('form-confirm-title')}</h1>
            <p className="formDescription">
              {tCapFirst('form-confirm-description')}
            </p>
            <ConfirmForm />
          </>
        )}
      </>
    );
  };

  return [formik, AddonsFormSection] as [
    FormikProps<AddonsFormValues>,
    () => JSX.Element
  ];
}

export default useAddons;
