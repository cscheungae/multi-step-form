import React from 'react';
import styles from './ConfirmForm.module.scss';
import { FormStep } from '@/types';
import { goStep } from '@/store/slices/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import planOptions from '../data/planOptions';
import addonsOptions from '../data/addonsOptions';
import { RootState } from '@/store';
import useCustomTranslation from '@/hooks/useCustomTranslation';

const ConfirmForm = () => {
  const dispatch = useDispatch();
  const { planLevel, paymentPeriod, addons } = useSelector(
    (state: RootState) => state.form
  );
  const { tCapFirst } = useCustomTranslation('common');

  const selectedPlan = planOptions.find(
    (option) =>
      option.paymentPeriod === paymentPeriod && option.planLevel === planLevel
  );

  const selectedAddons = addonsOptions.filter(
    (addon) =>
      addons.includes(addon.addonKey) && addon.paymentPeriod === paymentPeriod
  );

  const total =
    (selectedPlan?.price ?? 0) +
    selectedAddons.reduce((acc, next) => acc + next.price, 0);

  return (
    <div className={styles.wrapper}>
      <div className="summary">
        <div className="planLevelSummary">
          <div className="left">
            <span className="plan">{`${tCapFirst(
              selectedPlan?.planName ?? ''
            )} (${paymentPeriod === 1 ? 'Monthly' : 'Yearly'})`}</span>
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
          <div className="right">{`$${selectedPlan?.price}/${
            paymentPeriod === 1 ? 'mo' : 'yr'
          }`}</div>
        </div>
        <div className="addonsSummary">
          {selectedAddons.map((addon, i) => (
            <div className="addonsSummaryItem" key={i}>
              <div className="left">{tCapFirst(addon.addonTitle)}</div>
              <div className="right">{`+$${addon.price}/${
                addon.paymentPeriod === 1 ? 'mo' : 'yr'
              }`}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="total">
        <div className="left">{`Total (per ${
          paymentPeriod === 1 ? 'month' : 'year'
        })`}</div>
        <div className="right">{`$${total}/${
          paymentPeriod === 1 ? 'mo' : 'yr'
        }`}</div>
      </div>
    </div>
  );
};

export default ConfirmForm;
