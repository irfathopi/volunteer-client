import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import logo from '../../logos/Group 1329.png';
import googleIcon from '../../logos/google.jpg'
import '../../components/LogIn/LogIn.css'


//google log in 
const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    var { from } = location.state || { from: { pathname: "/" } };
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {name : displayName , email}
            setLoggedInUser(signedInUser);
            history.replace(from);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
           
          });
    }

        

    return (    
        <>
        <div>
            <img className="formLogo" src={logo} alt=""/>
            <div className = "loginFieldSize">
            <h2>Login With</h2>
            <button className="gbtn" variant="outlined" size="lg" block   onClick = {handleGoogleSignIn} >
            <img src={googleIcon} className="googlebtn"  />
            Continue with Gmail
            </button>
            <h5>Don't hace an account ? <a href="#">Creat an account</a></h5>
            </div>
        </div>
        </>
    );
};

export default LogIn;
