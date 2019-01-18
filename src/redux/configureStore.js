import { combineReducers, createStore, applyMiddleware } from 'redux';
import { comments } from './commentReducer';
import { scores } from './scoreReducer';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';

export const configureStore = () => {

  const combinedReducers = combineReducers({
    scores: scores,
    comments: comments
  });
  
  return createStore(
    combinedReducers, 
    applyMiddleware(thunkMiddleware, loggerMiddleware));
};