import {
  FormState,
  FormStep,
  PersonalInfoKeys,
  SelectPlanKeys,
  formStepArr,
} from '@/types';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: FormState = {
  formStep: 'personalInfo',
  name: '',
  email: '',
  phone: '',
  planLevel: 0,
  paymentPeriod: 1,
  addons: [],
  completed: false,
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
    setAddons: (state, action: { type: string; payload: number[] }) => {
      state.addons = action.payload;
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
      state.formStep = action.payload.step;
    },
    goBack: (state) => {
      const currentStep = state.formStep;
      const currentStepIndex = formStepArr.findIndex(
        (el) => el === currentStep
      );
      state.formStep = formStepArr[currentStepIndex - 1];
    },
    setCompleted: (
      state,
      action: {
        type: string;
        payload: { completed: boolean };
      }
    ) => {
      state.completed = action.payload.completed;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setPersonalInfo,
  setSelectPlan,
  setAddons,
  goNextStep,
  goStep,
  goBack,
  setCompleted,
} = formSlice.actions;

export default formSlice.reducer;
