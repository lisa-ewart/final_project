//const firebase = require('firebase');

export const initFirebase = () =>{
  console.log("in firebase.js");

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

  
  } 
  


// createNewUser('Lisa', 'lisa@email.com', 9999999999, 40.5, 50.7, ['electrician', 'plumber', 'HVAC']);

//database.ref('/lisa').set([0,7,8,9]);

// firebase.auth().onAuthStateChanged(function(user) {
//   if (user) {
//     console.log(user)
//     database.ref('users/'+user.uid).once('value').then(data=>{

//       if(data.val()){
//         console.log('welcome ' + user.displayName)
//       }else{
//         //console.log('Hey! ' + user.displayName + ' I don\'t know who you are' )
//         console.log('Hey! ' + user.displayName + ' I don\'t know who you are' )
//         createNewUser(user.uid, user.email, user.phoneNumber, ['electrician', 'plumber', 'HVAC']);
//       }
//     })
//   } else {
//     console.log('no user exist')
//   }
// });

export const createNewUser = (gmailId, email, phonenum, services)=>{
    const newUserRef = database.ref('users').push();
    const newUserKey = newUserRef.key;
    
    database.ref('users/' + gmailId).set({
      email:email,
      phonenum: phonenum,
      services:services,
    });
}

//const provider = new firebase.auth.GoogleAuthProvider();


export const signIn = () =>{
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider).then(function(result) {
       var token = result.credential.accessToken;
       var user = result.user;       
       console.log(user)
       console.log(user.displayName)
       console.log(user.email)
       console.log(user.uid)

    }).catch(function(error) {
       var errorCode = error.code;
       var errorMessage = error.message;
       console.log(error.code)
       console.log(error.message)
    });
}



export const signOut = () =>{
  firebase.auth().signOut()
  .then(function() {
     console.log('Signout Succesfull')
  }, function(error) {
     console.log('Signout Failed')  
  });
}









