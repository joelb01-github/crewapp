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