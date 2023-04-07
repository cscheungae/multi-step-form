import React from 'react';
import styles from './StepNumCircle.module.scss';

const StepNumCircle = (props: { index: number; active: boolean }) => {
  const { index, active } = props;
  return (
    <span className={styles.style + ' ' + `${active ? 'active' : ''} `}>
      {index}
    </span>
  );
};

export default StepNumCircle;
