/* Form Types */
export const formStepArr = [
  'personalInfo',
  'selectPlan',
  'addons',
  'confirm',
] as const;
export type FormStep = typeof formStepArr[number];
export type PlanLevel = 0 | 1 | 2;
export type PaymentPeriod = 1 | 12;

export interface FormState {
  formStep: FormStep;
  name: string;
  email: string;
  phone: string;
  planLevel: PlanLevel;
  paymentPeriod: PaymentPeriod;
  addons: number[];
  completed: boolean;
}

export type PersonalInfoKeys = 'name' | 'email' | 'phone';
export type SelectPlanKeys = 'planLevel' | 'paymentPeriod';
export type AddonKeys = 'addons' | 'paymentPeriod';

export type PersonalInfoFormValues = Pick<FormState, PersonalInfoKeys>;
export type SelectPlanFormValues = Pick<FormState, SelectPlanKeys>;
export type PartialSelectPlanFormValues = Partial<SelectPlanFormValues>;
export type AddonsFormValues = Pick<FormState, AddonKeys>;

export type FormFieldFormKeys = 'name' | 'email' | 'phone';
export type FormFieldsFormValues = Pick<FormState, FormFieldFormKeys>;

export type FormFieldSelectFormKeys = 'planLevel' | 'paymentPeriod';
export type FormFieldsSelectFormValues = Pick<
  FormState,
  FormFieldSelectFormKeys
>;
