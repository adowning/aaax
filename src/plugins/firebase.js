// const firebase = require('firebase')
import firebase from 'firebase'
require('firebase/firestore')

/* eslint-disable */
var config = {
  apiKey: 'AIzaSyDdspiJ0VAnGLeyRziofRCSld1bpBoms7E',
  authDomain: 'andrewsadmin.firebaseapp.com',
  databaseURL: 'https://andrewsadmin.firebaseio.com',
  projectId: 'andrewsadmin',
  storageBucket: 'andrewsadmin.appspot.com',
  messagingSenderId: '734746045873'
}
var fbApp = firebase.initializeApp(config)
// var defaultStorage = firebase.storage()
// var defaultDatabase = firebase.database()
var defaultStore = firebase.firestore()

export default fbApp
