import { PaymentPeriod, PlanLevel } from '@/types';
import PlanLevelSVG0 from '../../assets/images/icon-arcade.svg';
import PlanLevelSVG1 from '../../assets/images/icon-advanced.svg';
import PlanLevelSVG2 from '../../assets/images/icon-pro.svg';

const options: {
  planLevel: PlanLevel;
  planName: string;
  price: number;
  bonusMonths?: number;
  svgSrc: any;
  paymentPeriod: PaymentPeriod;
}[] = [
  {
    planLevel: 0,
    planName: 'form-selectPlan-planLevel-0',
    price: 9,
    svgSrc: PlanLevelSVG0,
    paymentPeriod: 1,
  },
  {
    planLevel: 1,
    planName: 'form-selectPlan-planLevel-1',
    price: 12,
    svgSrc: PlanLevelSVG1,
    paymentPeriod: 1,
  },
  {
    planLevel: 2,
    planName: 'form-selectPlan-planLevel-2',
    price: 15,
    svgSrc: PlanLevelSVG2,
    paymentPeriod: 1,
  },
  {
    planLevel: 0,
    planName: 'form-selectPlan-planLevel-0',
    price: 90,
    bonusMonths: 2,
    svgSrc: PlanLevelSVG0,
    paymentPeriod: 12,
  },
  {
    planLevel: 1,
    planName: 'form-selectPlan-planLevel-1',
    price: 120,
    bonusMonths: 2,
    svgSrc: PlanLevelSVG1,
    paymentPeriod: 12,
  },
  {
    planLevel: 2,
    planName: 'form-selectPlan-planLevel-2',
    price: 150,
    bonusMonths: 2,
    svgSrc: PlanLevelSVG2,
    paymentPeriod: 12,
  },
];

export default options;
