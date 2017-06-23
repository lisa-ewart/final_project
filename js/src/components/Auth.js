import React, { Component } from 'react';
import {signIn} from '../firebase'





export default class Auth extends Component {

    constructor(props){
        super(props)
        this.state = {
        	bgClass: 'bgphoto'
        }
    }

    componentDidMount(){
        
    }

    handleSignIn() {
    	signIn()
    	this.setState({
    		bgClass: 'hidden'
    	})
    }
    
    

    render() {
    	console.log(this.props)

        return <div >

        <div className="ui stackable menu">
		    <div className="item">
		        <img src="./assets/pin.png" />
		        <h2>GeoLocate </h2>
		    </div>
		    <a className="item">Features</a>
		    <a className="item">Profile</a>
		</div>

		<div className={this.state.bgClass}>
		    <div className="signInWindow">
		        <div className="font2 extraPad">Sign in/up with Gmail</div>
		        <div className="ui form">

		            <button onClick={() => this.handleSignIn()} className="js_google_signin signin centermargin">Sign in</button>
		            <button className="js_google_signout signout centermargin">Sign out</button>

		        </div>
		    </div>
		</div>
            
          
        </div>  

    }





}





