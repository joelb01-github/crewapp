import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Comments } from './commentReducer';
import { Scores } from './scoreReducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {

  const combinedReducers = combineReducers({
    scores: Scores,
    comments: Comments
  });

  const store = createStore(
    combinedReducers, 
    applyMiddleware(thunk, logger));

  return store;
};