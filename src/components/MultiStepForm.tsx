import React, { useEffect } from 'react';
import styles from './MultiStepForm.module.scss';
import StepBar from './mobile/StepBar';
import { useDispatch, useSelector } from 'react-redux';
import { formStepArr } from '../store/slices/formSlice';
import { RootState } from '@/store';
import useForm from '@/hooks/forms/useForm';
import useCustomTranslation from '@/hooks/useCustomTranslation';

const MultiStepForm = () => {
  const dispatch = useDispatch();
  const form = useSelector((root: RootState) => root.form);
  const { formStep } = form;
  const [formik, FormSection] = useForm(formStep);
  const { tCapFirst } = useCustomTranslation('common');

  return (
    <div className={styles.wrapper}>
      <StepBar step={formStepArr.findIndex((el) => el === form.formStep)} />
      <div className="formContainer">
        <div className="formContent">
          <FormSection />
        </div>
      </div>
      <div className="actionsBar">
        <button
          className="py-1 px-3 rounded-sm mt-3 mb-2 mx-3 text-base"
          onClick={() => {
            formik.handleSubmit();
          }}
          type="submit"
        >
          {form.formStep === 'confirm'
            ? tCapFirst('button-confirm')
            : tCapFirst('button-next')}
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
