import React from 'react';
import Image from 'next/image';
import { PlanLevel } from '@/store/slices/formSlice';

/**
 *
 * @todo Issues need fix: onclick optionTile, it is expected not to "blink"!
 */

const OptionTile = (props: {
  planLevel: PlanLevel;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  svgSrc: any;
  planName: string;
  price: number;
  bonusMonths: number;
  selected: boolean;
}) => {
  const {
    planLevel,
    setFieldValue,
    svgSrc,
    planName,
    price,
    bonusMonths,
    selected,
  } = props;
  return (
    <div
      key={planLevel}
      onClick={() => {
        setFieldValue('planLevel', planLevel);
      }}
    >
      <div className={`flex optionTile ${selected ? 'selected' : ''}`}>
        <Image
          src={svgSrc}
          height={45}
          width={45}
          alt="planLevel0"
          style={{ alignSelf: 'start' }}
        />
        <div className="planDetail">
          <h2 className="planName">{`${planName}`}</h2>
          <p className="price">{`$${price}/yr`}</p>
          <p className="bonus">{`${bonusMonths} months free`}</p>
        </div>
      </div>
    </div>
  );
};

export default OptionTile;
