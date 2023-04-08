import React from 'react';
import styles from './MultiStepForm.module.scss';
import StepBar from './mobile/StepBar';
import { useFormik } from 'formik';
import useCustomTranslation from '@/hooks/useCustomTranslation';
import { PersonalInfoForm } from './PersonalInfoForm';
import regExp from '@/helpers/regExp';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonalInfo } from '../store/slices/formSlice';
import { RootState } from '@/store';
import usePersonalInfo from '@/hooks/forms/usePersonalInfo';
import useSelectPlan from '@/hooks/forms/useSelectPlan';

const MultiStepForm = () => {
  const form = useSelector((root: RootState) => root.form);
  const [personalInfoFormik, PersonalInfoFormSection] = usePersonalInfo(form);
  const [selectPlanFormik, SelectPlanFormSection] = useSelectPlan(form);

  return (
    <div className={styles.wrapper}>
      <StepBar />
      <div className="formContainer">
        <div className="formContent">
          {/* <PersonalInfoFormSection /> */}
          <SelectPlanFormSection />
        </div>
      </div>
      <div className="actionsBar">
        <button
          className="py-1 px-3 rounded-sm mt-3 mb-2 mx-3 text-base"
          // onClick={() => personalInfoFormik.handleSubmit()}
          onClick={() => selectPlanFormik.handleSubmit()}
          type="submit"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default MultiStepForm;
