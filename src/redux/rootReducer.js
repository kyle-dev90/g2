import { combineReducers } from 'redux';
import storage from 'redux-persist/lib/storage';
import questionReducer from './slices/question';

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  keyPrefix: 'redux-',
  whitelist: ['settings']
};

const rootReducer = combineReducers({
  question: questionReducer
});

export { rootPersistConfig, rootReducer };
