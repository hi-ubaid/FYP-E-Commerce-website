import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css'; // Make sure to create and import the corresponding CSS file

function NotFoundPage() {
  return (
    <div className="not-found-container">
      <h1>404</h1>
      <p>Page Not Found</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFoundPage;
