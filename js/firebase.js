//const firebase = require('firebase');
  

  const config = {
    apiKey: "AIzaSyDf4d7CSjoPqmlYuDNZXO3lXj5CsWMH7QI",
    authDomain: "geocontract-61218.firebaseapp.com",
    databaseURL: "https://geocontract-61218.firebaseio.com",
    projectId: "geocontract-61218",
    storageBucket: "geocontract-61218.appspot.com",
    messagingSenderId: "653176035877"
  };
  firebase.initializeApp(config);

  const database = firebase.database();


  database.ref('/').once('value').then(data=>console.log(data.val()));

  function createNewUser(username, email, phonenum, lat, long, services){
    const newUserRef = database.ref('users').push();
    const newUserKey = newUserRef.key;

    database.ref('/users').push({
      Id: newUserKey,
      username:username,
      email:email,
      phonenum: phonenum,
      lat:lat,
      long:long,
      services:services,
    });
  } 

createNewUser('Lisa', 'lisa@email.com', 9999999999, 40.5, 50.7, ['electrician', 'plumber', 'HVAC']);

//database.ref('/lisa').set([0,7,8,9]);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log(user)
    database.ref('users/'+user.uid).once('value').then(data=>{
      if(data.val()){
        console.log('welcome ' + user.displayName)
      }else{
        console.log('Hey! ' + user.displayName + ' I don\'t know who you are' )
      }
    })
  } else {
    console.log('no user exist')
  }
});




