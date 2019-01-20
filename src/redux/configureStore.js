import { combineReducers, createStore, applyMiddleware } from 'redux';
import { Comments } from './commentReducer';
import { Scores } from './scoreReducer';
// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const configureStore = () => {

  const combinedReducers = combineReducers({
    scores: Scores,
    comments: Comments
  });

  const store = createStore(
    combinedReducers, 
    // applyMiddleware(thunkMiddleware, loggerMiddleware));
    applyMiddleware(thunk, logger));

  return store;
};