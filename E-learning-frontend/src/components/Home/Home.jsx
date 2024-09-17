// src/components/Auth/Signup.js
import React from 'react';
import Banner from './Banner';
import Footer from './Footer';

const Signup = () => {
  return (
    <div className="flex flex-col  sm:bg-base-100 items-center justify-center min-h-screen bg-gray-100 p-4">
      <Banner className="w-full mb-10" /> {/* Full width and margin below the banner */}
      <div className="w-full mt-10">
        <Footer className="mt-10 bg-gray-800 text-white py-4 text-center" /> {/* Dark background, white text, padding */}
      </div>
    </div>
  );
};

export default Signup;
