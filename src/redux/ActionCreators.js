import * as ActionTypes from './ActionTypes';
import { database } from '../firebase/firebase';

export const fetchScores = () => (dispatch) => {
  // app state is updated to inform call is starting
  dispatch(requestScores());

  // return a promise to wait for
  return database.ref('leaders').once('value')
  .then(snapshot => {
    let scores = [];
    snapshot.forEach((childSnapshot) => {
      scores.push(childSnapshot.val());
    });
    return scores;
  })
  .then(scores => dispatch(receiveScores(scores)))
  .catch(error => dispatch(failedScores(error.message)));
}

export const requestScores = () => {
  return {
    type: ActionTypes.REQUEST_SCORES,
    payload: null
  }
} 

export const receiveScores = (scores) => {
  return {
    type: ActionTypes.RECEIVE_SCORES,
    payload: scores
  }
}

export const failedScores = (err) => {
  return {
    type: ActionTypes.FAILED_SCORE,
    payload: err
  }
}

export const addScore = (newScore) => {
  return {
    type: ActionTypes.ADD_SCORE,
    payload: newScore
  }
}