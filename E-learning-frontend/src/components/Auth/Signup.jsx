import React, { useState } from 'react';

function Signup() {
  const [profileImage, setProfileImage] = useState(null);
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simulate an API call
    setTimeout(() => {
      // Implement your registration logic here
      if (email === 'test@example.com') {
        setError('Email already exists');
      } else {
        // Registration successful
        alert('Registration successful!');
      }
      setLoading(false);
    }, 2000);
  };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-4'>
      <div className='w-full max-w-lg p-6 bg-white rounded-lg shadow-md overflow-hidden'>
        <h2 className='text-2xl font-bold text-center text-teal-950 mb-6'>Create an Account</h2>
        <form onSubmit={handleSubmit}>
          {error && <div className='text-red-600 text-sm mb-4'>{error}</div>}

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Profile Image</label>
            <input
              type='file'
              accept='image/*'
              onChange={handleImageChange}
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              required
            />
            {profileImage && (
              <img src={profileImage} alt='Profile Preview' className='mt-2 w-24 h-24 rounded-full object-cover' />
            )}
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Username</label>
            <input
              type='text'
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              placeholder='Enter your username'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              placeholder='Enter your email'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Phone Number</label>
            <input
              type='tel'
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              placeholder='Enter your phone number'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Address</label>
            <input
              type='text'
              className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
              placeholder='Enter your address'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-sm font-medium text-gray-700'>Gender</label>
            <div className='flex items-center'>
              <div className='mr-4'>
                <input
                  type='radio'
                  id='male'
                  name='gender'
                  value='male'
                  checked={gender === 'male'}
                  onChange={handleGenderChange}
                  className='mr-1'
                />
                <label htmlFor='male' className='text-sm text-gray-600'>Male</label>
              </div>
              <div className='mr-4'>
                <input
                  type='radio'
                  id='female'
                  name='gender'
                  value='female'
                  checked={gender === 'female'}
                  onChange={handleGenderChange}
                  className='mr-1'
                />
                <label htmlFor='female' className='text-sm text-gray-600'>Female</label>
              </div>
              <div>
                <input
                  type='radio'
                  id='other'
                  name='gender'
                  value='other'
                  checked={gender === 'other'}
                  onChange={handleGenderChange}
                  className='mr-1'
                />
                <label htmlFor='other' className='text-sm text-gray-600'>Other</label>
              </div>
            </div>
          </div>

          <div className='flex mb-4'>
            <div className='w-1/2 pr-2'>
              <label className='block text-sm font-medium text-gray-700'>Password</label>
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
                placeholder='Create a password'
                required
              />
            </div>

            <div className='w-1/2 pl-2'>
              <label className='block text-sm font-medium text-gray-700'>Confirm Password</label>
              <input
                type='password'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className='block w-full p-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600'
                placeholder='Confirm your password'
                required
              />
            </div>
          </div>

          <button
            type='submit'
            disabled={loading}
            className={`w-full py-2 mt-4 bg-teal-950 text-white font-semibold rounded-md hover:bg-teal-700 transition duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>

        <p className='mt-4 text-center text-gray-600'>
          Already have an account?{' '}
          <a href='/login' className='text-teal-600 hover:underline'>
            Log in
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
