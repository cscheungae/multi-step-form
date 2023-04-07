import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type FormStep = 'personalInfo' | 'selectPlan' | 'addons' | 'confirm';
export type PlanLevel = 0 | 1 | 2;
export type PaymentPeriod = 1 | 12;

export interface FormState {
  formStep: FormStep;
  name: string;
  email: string;
  phone: string;
  planLevel: PlanLevel;
  paymentPeriod: PaymentPeriod;
}

type PersonalInfoKeys = 'name' | 'email' | 'phone';
type SelectPlanKeys = 'planLevel' | 'paymentPeriod';

export type PersonalInfoFormValues = Pick<FormState, PersonalInfoKeys>;
export type SelectPlanFormValues = Pick<FormState, SelectPlanKeys>;

export type FormFieldFormKeys = 'name' | 'email' | 'phone';
export type FormFieldsFormValues = Pick<FormState, FormFieldFormKeys>;

export type FormFieldSelectFormKeys = 'planLevel' | 'paymentPeriod';
export type FormFieldsSelectFormValues = Pick<
  FormState,
  FormFieldSelectFormKeys
>;

const initialState: FormState = {
  formStep: 'personalInfo',
  name: '',
  email: '',
  phone: '',
  planLevel: 0,
  paymentPeriod: 1,
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
  },
});

// Action creators are generated for each case reducer function
export const { setPersonalInfo, setSelectPlan } = formSlice.actions;

export default formSlice.reducer;
