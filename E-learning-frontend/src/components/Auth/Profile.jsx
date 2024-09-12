import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [student, setStudent] = useState(null);
  
  // Sample data representing courses with progress; replace this with actual data.
  const courses = [
    { id: 1, title: 'React for Beginners', progress: 75 },
    { id: 2, title: 'Advanced JavaScript', progress: 50 },
    { id: 3, title: 'Data Structures and Algorithms', progress: 30 },
  ];

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
    <div className="flex flex-col items-center w-full min-h-screen bg-gradient-to-b from-teal-500 to-teal-900 p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-teal-900 text-center mb-4">My Profile</h1>
        
        {/* Profile Image */}
        <div className="flex justify-center mb-4">
          <img
            src={student.picture} // User's profile image
            alt="Profile"
            className="w-32 h-32 rounded-full border-4 border-teal-900"
          />
        </div>
        
        {/* Student Information */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Personal Information</h2>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Nickname:</strong> {student.nickname}</p>
        </div>
        
        {/* Courses with Progress */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Courses Enrolled</h2>
          <ul className="list-disc pl-5">
            {courses.map(course => (
              <li key={course.id} className="flex justify-between items-center mb-2">
                <span>{course.title}</span>
                <div className="relative w-32">
                  <div className="bg-gray-300 h-2 rounded">
                    <div
                      className="bg-teal-900 h-2 rounded"
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs font-medium text-teal-900">
                    {course.progress}%
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <div className="flex justify-center">
          <button className="bg-teal-900 text-white font-semibold rounded-md px-4 py-2 hover:bg-teal-700 transition duration-200">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
