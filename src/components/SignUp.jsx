import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";
import './Registration.css';
import axios from 'axios'; // Import axios for making HTTP requests

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // Add state variable for message

  const signUp = (e) => {
    e.preventDefault();
    const auth = getAuth(); 
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        sendEmailVerification(auth.currentUser)
          .then(() => {
            alert("Check your Mailbox for Email Verification");
            setMessage("Account created successfully!"); // Set message when sign-up is successful
          })
          .catch((error) => {
            console.log(error);
          });

        // Send user data to local backend for storing in MySQL database
        axios.post('http://localhost:3001/register', { email, username: email, password })
          .then(response => {
            console.log("User data sent to local database:", response.data);
          })
          .catch(error => {
            console.error("Error sending user data to local database:", error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="loginForm">
        <form onSubmit={signUp}>
          <h1>Create Account</h1>
          <input
            type="email"
            className="textInput"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="textInput"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button className="button" type="submit">Sign Up</button>
        </form>
        {message && <p className="message">{message}</p>} {/* Display message */}
        <div className="signInLink">
          <p>Have an account? <Link to="/SignIn">Sign in here</Link>.</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;