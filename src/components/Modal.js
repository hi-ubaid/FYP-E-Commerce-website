// Modal.js
import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'; // Make sure to create a Modal.css file for styles

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button onClick={onClose} className="modal-close-button">Close</button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // You need to have a div with this id in your index.html
  );
};

export default Modal;
