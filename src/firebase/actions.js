import { database } from './firebase';

export const addScore = (date, name, score) => {

  const newScore = {
    date: date,
    name: name,
    score: score
  };

  return database.ref('leaders').push()
  .then(ref => { ref.set(newScore) })
  .catch(error => { 
    console.log('Push new score failed ',error.message);
    alert('Score could not be pushed\nError: ' + error.message);
  });
};