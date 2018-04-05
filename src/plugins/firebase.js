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
var storage = fbApp.storage('gs://phonerec')
// var storageRef = storage.ref('gs://phonerec')
var storageRef = storage.ref()
//phonerec/Call Recording/2018/04/03/2018-04-03_14-13-42_mark_18664194096.wav
// Create a reference to the file whose metadata we want to retrieve
// gs: console.log('hi')
console.log(storageRef)
// firebasestorage.googleapis.com/v0/b/phonerec/o/Call%20Recording%2F2018%2F04%2F03%2F2018-04-03_14-13-42_mark_18664194096.wav?alt=media&token=b3759462-0d69-4e46-a0fb-15c353324ee9
// https: var forestRef = storageRef.child('Call%20Recording/2018/04/03/')
var spaceRef = storageRef.child('Call Recording/2018/04/03/')
var file = spaceRef.child('2018-04-03_14-13-42_mark_18664194096.wav')
console.log(file.name)
// console.log(forestRef)
// Get metadata properties
file
  .getMetadata()
  .then(function(metadata) {
    // Metadata now contains the metadata for 'images/forest.jpg'

    console.log(metadata)
  })
  .catch(function(error) {
    console.log('error --- ')
    console.log(error)
    // Uh-oh, an error occurred!
  })
// var defaultDatabase = firebase.database()
var defaultStore = firebase.firestore()

export default fbApp
