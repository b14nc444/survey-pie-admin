import { createSelector, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    setTitle: (state, action) => {
      if (state.data) {
        state.data.title = action.payload;
      }
    },
    addQuestion: (state, action) => {
      const type = action.payload;

      let options;

      if (type === 'text' || type === 'textarea') {
        options = {
          max: 20,
          placeholder: '',
        };
      } else if (type === 'select') {
        options = {
          max: 1,
          items: ['a', 'b', 'c'],
        };
      }

      state.data.questions.push({
        title: 'Untitled',
        desc: '',
        type: type,
        required: false,
        options: options,
      });
    },
    moveUpQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index - 1];
      state.data.questions[index - 1] = temp;
    },
    moveDownQuestion: (state, action) => {
      const index = action.payload;
      const temp = state.data.questions[index];
      state.data.questions[index] = state.data.questions[index + 1];
      state.data.questions[index + 1] = temp;
    },
    deleteQuestion: (state, action) => {
      state.data.questions.splice(action.payload, 1);
    },
    setSurvey: (state, action) => {
      state.data = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

// Selectors
export const selectSurveyData = (state) => state.survey.data;
export const selectSurveyLoading = (state) => state.survey.loading;
export const selectSurveyError = (state) => state.survey.error;

export const selectSurveyTitle = createSelector([selectSurveyData], (data) =>
  data && data.title ? data.title : ''
);

export const selectSurveyQuestions = createSelector([selectSurveyData], (data) =>
  data && data.questions ? data.questions : []
);

export const {
  setTitle,
  addQuestion,
  moveUpQuestion,
  moveDownQuestion,
  deleteQuestion,
  setSurvey,
  setLoading,
  setError,
} = surveySlice.actions;

export default surveySlice.reducer;
