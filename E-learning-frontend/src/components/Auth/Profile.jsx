import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [student, setStudent] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setStudent(JSON.parse(userData)); // Retrieve user data from localStorage
    }
  }, []);

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center w-3/4 mx-auto bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-3xl font-bold text-teal-950 mb-4">Student Profile</h1>
      
      {/* Profile Image */}
      <img
        src={student.picture} // Use the user's profile image
        alt="Profile"
        className="w-32 h-32 rounded-full border-2 border-teal-950 mb-2"
      />
      
      {/* Student Information */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold">Personal Information</h2>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Email:</strong> {student.email}</p>
      </div>
      
      {/* Other information can be added here as needed */}
    </div>
  );
};

export default Profile;
