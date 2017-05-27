
import firebase from '../vendor/firebase.js';

const provider = new firebase.auth.TwitterAuthProvider();

export const signInWithPopup = () => {
  return firebase.auth().signInWithPopup(provider).then((result) => {
    const { accessToken, secret } = result.credential;
    const { user } = result;
    return user;
  }).catch((error) => {
    throw error;
  })
};

firebase.auth().onAuthStateChanged(function(user) {
});
