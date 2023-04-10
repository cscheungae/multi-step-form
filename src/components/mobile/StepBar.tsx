import React from 'react';
import StepNumCircle from './StepNumCircle';
import styles from './StepBar.module.scss';

const activeNum = 1;

const StepBar = (props: { step: number }) => {
  const { step } = props;
  return (
    <div className={styles.stepBar}>
      {[...Array(4).keys()].map((i) => (
        <StepNumCircle key={i} index={i + 1} active={i === step} />
      ))}
    </div>
  );
};

export default StepBar;
