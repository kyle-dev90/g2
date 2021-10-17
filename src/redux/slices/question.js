import axios from 'src/utils/axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  error: false,
  questions: JSON.parse(localStorage.getItem('questions')) || [],
  score: 0,
  totalCount: 0,
  gameOver: false
};

const slice = createSlice({
  name: 'question',
  initialState: initialState,
  reducers: {
    startLoading(state) {
      state.isLoading = true;
    },
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    getQuestionsSuccess(state, action) {
      state.isLoading = false;
      state.questions = action.payload;
    },
    setTotalCount(state, action) {
      state.isLoading = false;
      state.totalCount = action.payload;
    },
    addScore(state) {
      state.score += 1;
    },
    setInitialize(state) {
      localStorage.clear();
      state.questions = [];
      state.score = 0;
      state.totalCount = 0;
      state.gameOver = false;
    },
    setGameOver(state) {
      state.gameOver = true;
    }
  }
});

export const {
  getQuestionsSuccess,
  addScore,
  hasError,
  startLoading,
  setTotalCount,
  setInitialize,
  setGameOver
} = slice.actions;

export const getQuestions = () => {
  return async (dispatch) => {
    dispatch(startLoading());
    try {
      // integrate api mock integration
      const response = await axios.get('/api.php');
      localStorage.setItem('questions', JSON.stringify(response.data.results));
      dispatch(setTotalCount(response.data.results.length));
      dispatch(getQuestionsSuccess(response.data.results));
    } catch (error) {
      dispatch(hasError(error));
    }
  };
};

export default slice.reducer;
