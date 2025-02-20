// /components/Toast.js
import React, { useState, useEffect } from 'react';

const Toast = ({ message, show }) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      setTimeout(() => setIsVisible(false), 5000); // Hide after 5 seconds
    }
  }, [show]);

  return (
    isVisible && (
      <div className="toast">
        {message}
      </div>
    )
  );
};

export default Toast;
