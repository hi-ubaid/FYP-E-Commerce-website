// InstagramPopup.js
import React from 'react';
import instagramLogo from '../assets/popup/instagramLogo.png'; // Import Instagram logo image
import stylishPersonImage from '../assets/popup/stylishPersonImage.png'; // Import stylish person image
import './instagram-popup.css'; // Import the CSS file
import LazyImage from './LazyImage';

const InstagramPopup = ({ onClose }) => {
  return (
    <div className="instagram-popup">
      <LazyImage src={instagramLogo} alt="Instagram Logo" />
      <p className="popup-text">Follow us on Instagram @clothify_insta for updates and promotions!</p>
      <LazyImage src={stylishPersonImage} alt="Stylish Person" />
      <button className="popup-button" onClick={onClose}>Close</button>
    </div>
  );
};

export default InstagramPopup;
