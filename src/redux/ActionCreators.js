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
      let score = childSnapshot.val();
      score.id = childSnapshot.key;
      scores.push(score);
    });
    return scores;
  })
  .then(scores => dispatch(receiveScores(scores)))
  .catch(error => dispatch(failedScores(error.message)));
};

export const requestScores = () => ({
  type: ActionTypes.REQUEST_SCORES,
  payload: null
});

export const receiveScores = (scores) => ({
  type: ActionTypes.RECEIVE_SCORES,
  payload: scores
});

export const failedScores = (err) => ({
  type: ActionTypes.FAILED_SCORE,
  payload: err
});

export const addScore = (newScore) => (dispatch) => {

  return database.ref('leaders').push()
  .then(ref => {
    return ref.set(newScore)
    .then(() => ref.once("value"))
    .then((newScore) => {
      let score = newScore.val();
      score.id = newScore.key;
      return dispatch(addedScore(score));
    })
    .catch(error => { 
      console.log('Add new score failed ',error.message);
      alert('Your score could not be added\nError: ' + error.message);
    });
  });
};

export const addedScore = (newScore) => ({
  type: ActionTypes.ADDED_SCORE,
  payload: newScore
});