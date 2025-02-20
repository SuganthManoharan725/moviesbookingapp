// /pages/index.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import Input from '../components/input';
import Button from '../components/button';

const Login = () => {
  const { setUser } = useAppContext();
  const Navigate = useNavigate();
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'naval.ravikant' && password === '05111974') {
      setUser({ username });
      localStorage.setItem('user', JSON.stringify({ username }));
      Navigate('/booking');
    } else {
      setError('Wrong Credentials');
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h1>
        
        <Input 
          label="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="mb-4" 
        />
        <Input 
          label="Password" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="mb-6" 
        />
        
        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        
        <Button onClick={handleLogin} className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;