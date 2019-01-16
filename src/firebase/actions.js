import { database } from './firebase';

export const fetchLeaders = () => {
  return database.ref('leaders').once('value')
  .then(snapshot => {
    let leaders = [];
    snapshot.forEach((childSnapshot) => {
      leaders.push(childSnapshot.val());
    });
    return leaders;
  })
  .catch(error => { 
    console.log('Fetch leaders ',error.message);
    alert('Leaders could not be fetched\nError: ' + error.message);
  });
};

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