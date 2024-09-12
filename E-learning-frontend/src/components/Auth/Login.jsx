import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0();

  const handleGoogleLogin = () => {
    // Trigger the Auth0 login with the Google connection
    loginWithRedirect({ connection: 'google-oauth2' });
  };

  // Check if user is authenticated and log user data
  React.useEffect(() => {
    if (isAuthenticated && user) {
      console.log('User data:', user);
      localStorage.setItem('user',JSON.stringify(user));
       // You can handle user data as needed
    }
  }, [isAuthenticated, user]);

  return (
    <div className='flex w-3/5 mx-auto bg-white shadow-2xl rounded-lg overflow-hidden'>
      <div className='w-1/2'>
        <img
          className='object-fit h-full w-full'
          src='https://static.vecteezy.com/system/resources/previews/001/410/879/large_2x/e-learning-online-education-futuristic-banner-vector.jpg'
          alt="E-Learning Banner"
        />
      </div>
      <form className='flex-col w-1/2 p-8 bg-white'>
        <h1 className='text-center text-3xl font-bold mb-6 text-teal-950'>Login</h1>
        <div className='mb-6'>
          <label className='block font-medium text-gray-700'>Email</label>
          <input
            type="email"
            className='block w-full rounded-md border border-gray-300 py-2 px-3 mt-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600'
            placeholder='Enter your email'
          />
        </div>
        <div className='mb-6'>
          <label className='block font-medium text-gray-700'>Password</label>
          <input
            type="password"
            className='block w-full rounded-md border border-gray-300 py-2 px-3 mt-1 text-gray-900 focus:outline-none focus:ring-2 focus:ring-teal-600'
            placeholder='Enter your password'
          />
        </div>
        <div className='mb-6'>
          <button className='w-full h-12 bg-teal-950 rounded-md text-white font-semibold hover:bg-teal-700 transition duration-200'>
            Login
          </button>
        </div>
        <div className='text-center mb-4'>
          <span className='text-gray-600'>or</span>
        </div>
        <button 
          type="button" 
          onClick={handleGoogleLogin} 
          className="flex items-center w-full p-2 border rounded-lg shadow-md bg-white hover:bg-gray-200 transition duration-200"
        >
          <img
            src="https://th.bing.com/th/id/R.0dd54f853a1bffb0e9979f8146268af3?rik=qTQlRtQRV5AliQ&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-google-logo-icon-png-transparent-background-1000.png&ehk=VlcCHZ7jyV%2fCI7dZfbUl8Qb9%2f7uibkF6I6MBoqTtpRU%3d&risl=&pid=ImgRaw&r=0"
            alt="Google Login"
            className="w-8 h-8 mr-2"
          />
          <span> Login with Google</span>
        </button>
        <div className='text-center mt-4'>
          <p className='text-gray-600'>
            Don't have an account?{' '}
            <a href='/signup' className='text-teal-600 hover:underline'>
              Sign up here
            </a>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
