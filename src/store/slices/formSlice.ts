import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

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
}

type PersonalInfoKeys = 'name' | 'email' | 'phone';
type SelectPlanKeys = 'planLevel' | 'paymentPeriod';
type AddonKeys = 'addons';

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

const initialState: FormState = {
  // formStep: 'personalInfo',
  formStep: 'confirm',
  name: '',
  email: '',
  phone: '',
  planLevel: 0,
  paymentPeriod: 1,
  addons: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setPersonalInfo: (
      state,
      action: {
        type: string;
        payload: Pick<FormState, PersonalInfoKeys>;
      }
    ) => {
      const { name, email, phone } = action.payload;
      state.name = name;
      state.email = email;
      state.phone = phone;
    },
    setSelectPlan: (
      state,
      action: { type: string; payload: Pick<FormState, SelectPlanKeys> }
    ) => {
      const { planLevel, paymentPeriod } = action.payload;
      state.planLevel = planLevel;
      state.paymentPeriod = paymentPeriod;
    },
    setAddons: (
      state,
      action: { type: string; payload: Pick<FormState, AddonKeys> }
    ) => {
      const { addons } = action.payload;
      state.addons = addons;
    },
    goNextStep: (state) => {
      const currentStep = state.formStep;
      const currentStepIndex = formStepArr.findIndex(
        (el) => el === currentStep
      );
      state.formStep = formStepArr[currentStepIndex + 1];
    },
    goStep: (
      state,
      action: {
        type: string;
        payload: { step: FormStep };
      }
    ) => {
      console.log('goStep');
      state.formStep = action.payload.step;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPersonalInfo, setSelectPlan, setAddons, goNextStep, goStep } =
  formSlice.actions;

export default formSlice.reducer;
