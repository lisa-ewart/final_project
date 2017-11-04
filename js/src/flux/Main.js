import React, { Component } from 'react';
import {initFirebase, signIn} from '../firebase'
import App from '../components/App';

import { 
    actions
} from './actions';

import {
    Store
} from './store';


initFirebase()

export default class Main extends Component {
    state = Store

	dispatch(actionName, options) {
		const actionToDo = actions[actionName];
		actionToDo(this.state, options).then((newStore) => {
			this.setState(newStore);
		});	
	}

	render() {
		const sharedProps = {
			dispatch: (...args) => this.dispatch(...args),
		};

        return <App {...this.state} {...sharedProps} /> 
	}
}






// const provider = new firebase.auth.GoogleAuthProvider();


// const signinBtn = document.querySelector('.js_google_signin');

// if(signinBtn !== null) {
//         signinBtn.addEventListener('click', (e) => {
//             e.preventDefault();
//             //start signin()
            
//             firebase.auth()
//             .signInWithPopup(provider).then(function(result) {
//                var token = result.credential.accessToken;
//                var user = result.user;
               
//                console.log(token)
//                console.log(user)
//                console.log(result)
//                console.log(user.displayName)
//                console.log(user.email)
//                console.log(user.uid)

//             }).catch(function(error) {
//                var errorCode = error.code;
//                var errorMessage = error.message;
               
//                console.log(error.code)
//                console.log(error.message)
//             });
//          //end signin()
            
         

         
//              });
//    }




// const signoutBtn = document.querySelector('.js_google_signout');

// if(signoutBtn !== null) {
//         signoutBtn.addEventListener('click', (e) => {
//             e.preventDefault();


//                   firebase.auth().signOut()
                  
//                   .then(function() {
//                      console.log('Signout Succesfull')
//                   }, function(error) {
//                      console.log('Signout Failed')  
//                   });
         
//              });
       
//    }


