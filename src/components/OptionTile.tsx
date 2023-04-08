import React from 'react';
import Image from 'next/image';
import { PlanLevel } from '@/store/slices/formSlice';

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
}) => {
  const { planLevel, setFieldValue, svgSrc, planName, price, bonusMonths } =
    props;
  return (
    <div
      key={planLevel}
      onClick={() => {
        setFieldValue('planLevel', planLevel);
      }}
    >
      <div className="flex optionTile">
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
