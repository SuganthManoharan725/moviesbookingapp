import React from 'react';

const Input = ({ label, type = 'text', value, onChange, className }) => (
  <div className={className}>
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <input 
      type={type} 
      value={value} 
      onChange={onChange} 
      placeholder={label} 
      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
    />
  </div>
);

export default Input;
