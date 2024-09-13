import React, { useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Login() {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();
  const [showPassword, setShowPassword] = useState(false);

  const handleGoogleLogin = () => {
    loginWithRedirect({ connection: 'google-oauth2' });
  };

  React.useEffect(() => {
    if (isAuthenticated && user) {
      console.log('User data:', user);
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [isAuthenticated, user]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col md:flex-row w-full max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden'>
      <div className='md:w-1/2'>
        <img
          className='object-cover w-full h-72 md:h-full'
          src='https://static.vecteezy.com/system/resources/previews/001/410/879/large_2x/e-learning-online-education-futuristic-banner-vector.jpg'
          alt="E-Learning Banner"
        />
      </div>
      <form className='flex flex-col w-full md:w-1/2 p-8 bg-white overflow-y-auto' style={{ maxHeight: '90vh' }}>
        <h1 className='text-center text-3xl font-bold mb-6 text-teal-950'>Login</h1>

        {/* Email Field */}
        <div className='mb-4'>
          <label className='block font-medium text-gray-700'>Email</label>
          <input
            type="email"
            className='block w-full rounded-md border border-gray-300 py-2 px-3 mt-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600'
            placeholder='Enter your email'
            required
          />
        </div>

        {/* Password Field */}
        <div className='mb-4'>
          <label className='block font-medium text-gray-700'>Password</label>
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              className='block w-full rounded-md border border-gray-300 py-2 px-3 mt-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600 pr-10'
              placeholder='Enter your password'
              required
            />
            <button
              type='button'
              onClick={togglePasswordVisibility}
              className='absolute inset-y-0 right-0 flex items-center px-3 text-gray-500'
            >
              {showPassword ? <FaEyeSlash className='w-5 h-5' /> : <FaEye className='w-5 h-5' />}
            </button>
          </div>
        </div>

        {/* Login Button */}
        <div className='mb-6'>
          <button className='w-full h-12 bg-teal-950 rounded-md text-white font-semibold hover:bg-teal-700 transition duration-200'>
            Login
          </button>
        </div>

        {/* OR Divider */}
        <div className='text-center mb-4'>
          <span className='text-gray-600'>or</span>
        </div>

        {/* Google Login Button */}
        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          className="flex items-center justify-center w-full p-2 border rounded-lg shadow-md bg-white hover:bg-gray-200 transition duration-200"
        >
          <img
            src="https://th.bing.com/th/id/R.0dd54f853a1bffb0e9979f8146268af3?rik=qTQlRtQRV5AliQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-google-logo-icon-png-transparent-background-1000.png&ehk=VlcCHZ7jyV%2fCI7dZfbUl8Qb9%2f7uibkF6I6MBoqTtpRU%3d&risl=&pid=ImgRaw&r=0"
            alt="Google Login"
            className="w-8 h-8 mr-2"
          />
          <span> Login with Google</span>
        </button>

        {/* Signup Link */}
        <div className='text-center mt-4'>
          <p className='text-gray-600'>
            Don't have an account?{' '}
            <Link href='/signup' className='text-teal-600 hover:underline'>
              Sign up here 
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
