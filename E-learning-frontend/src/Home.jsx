// src/components/Auth/Signup.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Signup from './components/Auth/Signup';

const Home = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    // Add your signup logic here (if any)

    // Navigate to home page on button click
    navigate('/login');
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Signup Page</h1>
        <button 
          onClick={handleSignup}
          className="bg-teal-600 text-white font-semibold rounded-md px-6 py-3 hover:bg-teal-500 transition duration-200 shadow-lg"
        >
          Go to Login
        </button>
        
      </div>
    </div>
  );
};

export default Home;
