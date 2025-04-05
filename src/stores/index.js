import { configureStore } from '@reduxjs/toolkit';

import surveyReducer from './survey/surveySlice';

export const store = configureStore({
  reducer: {
    survey: surveyReducer,
  },
});
