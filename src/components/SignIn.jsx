import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword, sendPasswordResetEmail, signInWithPopup } from "firebase/auth";
import { auth, provider } from '../firebaseauth'; // Ensure provider is correctly imported
import { Link } from "react-router-dom";
import './Registration.css';

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [showResetForm, setShowResetForm] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        setMessage("Signed in successfully!");
      })
      .catch((error) => {
        window.alert("Error: Incorrect password or email.");
        console.log(error);
      });
  };

  const signInWithGoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        setMessage("Signed in with Google successfully!");
      })
      .catch((error) => {
        window.alert("Error: Unable to sign in with Google.");
        console.log(error);
      });
  };

  const handleResetPassword = (e) => {
    e.preventDefault();
    const auth = getAuth();
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        setMessage("Password reset email sent! Please check your inbox.");
        setShowResetForm(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleResetLinkClick = () => {
    setShowResetForm(true);
    setMessage("");
  };

  return (
    <div className="container">
      <div className="loginForm">
        <form onSubmit={signIn}>
          <button className="button" onClick={signInWithGoogle}>Sign In With Google</button>
          <h1>Log In to your Account</h1>
          <input
            type="email"
            className="textInput"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="textInput"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="button" type="submit">Log In</button>
        </form>
        <p>Forgot your password? <Link to="#" onClick={handleResetLinkClick}>Reset it here</Link>.</p>
        {showResetForm && (
          <form onSubmit={handleResetPassword}>
            <input
              type="email"
              className="textInput"
              placeholder="Enter your email"
              value={resetEmail}
              onChange={(e) => setResetEmail(e.target.value)}
            />
            <button className="button" type="submit">Reset Password</button>
          </form>
        )}
        {message && <p className="message">{message}</p>}
        <div className="signUpLink">
          <p>Don't have an account? <Link to="/signup">Sign up here</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
