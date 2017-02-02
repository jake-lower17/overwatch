import firebase from 'firebase';

try {

  // Initialize Firebase
  var config = {
    apiKey: 'AIzaSyBYmSp8p_ZwRDvCSk-C3DUHwuspQn8ITGc',
    authDomain: 'ow-app-3f4bb.firebaseapp.com',
    databaseURL: 'https://ow-app-3f4bb.firebaseio.com',
    storageBucket: 'ow-app-3f4bb.appspot.com',
    messagingSenderId: '96962695775',
  };
  firebase.initializeApp(config);
  var firebaseRef = firebase.database().ref();
}catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
