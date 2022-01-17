import React from 'react';
import '../css/NotFound.css';

export default function NotFound() {
  return (
    <div className="oopss">
      <div className="error-text">
        <span>404</span>
        <p>Not Found</p>
        <p className="hmpg">
          <a href="/comidas" className="back">Back To Home</a>
        </p>
      </div>
    </div>
  );
}
