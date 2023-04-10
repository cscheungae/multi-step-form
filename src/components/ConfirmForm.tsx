import React from 'react';
import styles from './ConfirmForm.module.scss';
import { FormStep, goStep } from '@/store/slices/formSlice';
import { useDispatch } from 'react-redux';

const ConfirmForm = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className="summary">
        <div className="planLevelSummary">
          <div className="left">
            <span className="plan">Arcade (Monthly)</span>
            <a
              className="change"
              onClick={() => {
                dispatch(goStep({ step: 'selectPlan' }));
                console.log('clicked');
              }}
            >
              Change
            </a>
          </div>
          <div className="right">$9/mo</div>
        </div>
        <div className="addonsSummary">
          <div className="addonsSummaryItem">
            <div className="left">Online service</div>
            <div className="right">+$1/mo</div>
          </div>
          <div className="addonsSummaryItem">
            <div className="left">Larger service</div>
            <div className="right">+$2/mo</div>
          </div>
        </div>
      </div>
      <div className="total">
        <div className="left">Toal (per month)</div>
        <div className="right">$12/mo</div>
      </div>
    </div>
  );
};

export default ConfirmForm;
