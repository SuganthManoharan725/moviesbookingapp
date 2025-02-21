// /components/Button.js
import React from 'react';

const Button = ({ onClick, children, type = 'button' }) => {
  return (
    <button type={type} onClick={onClick} className="bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline w-50">
      {children}
    </button>
  );
};

export default Button;
