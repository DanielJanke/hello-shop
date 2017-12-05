import * as firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyAZknjFHt_2abAf6XrwHb4XrDcIvwoz1BY',
  authDomain: 'suff-rakete.firebaseapp.com',
  databaseURL: 'https://suff-rakete.firebaseio.com',
  projectId: 'suff-rakete',
  storageBucket: 'suff-rakete.appspot.com',
  messagingSenderId: '595705009252'
};
firebase.initializeApp(config);

console.log('fb output');
// console.log(firebase.auth());

export default firebase;
