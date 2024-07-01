// EmailRestAPI.jsx

import axios from 'axios';
import React, { useState } from 'react';
import '../EmailRestAPI.css'; // Import the CSS file

const EmailRestAPI = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'useownserviceid';   //Use own service id here
    const templateId = 'template'; //use own template id here
    const publicKey = 'pk'; //use own publickey here

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,ow,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'Clothify',
        message: message,
      },
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="header">
        <h1 style={{ color: 'black' }}>Welcome to Mart in Cart</h1>
      </div>
      <div className="contact-form">
        <div className="contact-form__container">
          <div className="contact-form__header">
            <h2 style={{ color: 'black' }}>Contact Us</h2>
            <p style={{ textAlign: 'center' }}>We'd love to hear from you!</p>
          </div>
          <form onSubmit={handleSubmit} className="container">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="input-field"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-field"
            />
            <textarea
              cols="30"
              rows="10"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="textarea-field"
            />
            <input type="submit" value="Send Email" className="submit-button" />
          </form>
        </div>
      </div>
      <div className="header">
            <p>&copy; 2024 Clothify All rights reserved.</p>
      </div>
    </div>
  );
};

export default EmailRestAPI;
