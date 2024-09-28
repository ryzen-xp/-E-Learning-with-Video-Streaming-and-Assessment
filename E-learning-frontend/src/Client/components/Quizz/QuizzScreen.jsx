import React, { useEffect, useState } from "react";
import { getQuizzes } from "./QuizzApi"; // Adjust the path as necessary
import { useNavigate } from "react-router-dom";

const QuizzScreen = () => {
  const [quizzes, setQuizzes] = useState([]); // State to hold quizzes
  const [loading, setLoading] = useState(true); // State to manage loading status
  const [error, setError] = useState(null); // State to manage errors
  const navigate = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const resp = await getQuizzes(); // Await the API call
        console.log("Fetched quizzes:", resp);
        setQuizzes(resp); // Set quizzes data to state
      } catch (error) {
        console.log(error);
        setError('Failed to fetch quizzes.'); // Set error message
      } finally {
        setLoading(false); // Set loading to false regardless of success or error
      }
    };

    fetchQuizzes(); // Call the function to fetch quizzes
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state
  }

  if (error) {
    return <div>{error}</div>; // Show error message
  }

  const handleClick = (quiz) => {
    localStorage.setItem('quizzToPlay', JSON.stringify(quiz)); // Store the selected quiz in local storage
    navigate('/quizzPlay'); // Navigate to the quiz play screen
  };

  return (
    <div className="container px-4">
      <h1 className="text-3xl font-bold mb-6">All Quizzes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {quizzes.map((quiz, index) => (
          <div key={index} className="border rounded-lg shadow-md p-4">
            <img src={quiz.banner_url} alt={quiz.title} className="w-full h-32 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{quiz.title}</h2>
            <p className="text-gray-600">{quiz.description}</p>
            <p className="text-sm text-gray-500">Category: {quiz.category}</p>
            <button 
              className="mt-2 text-pink-500"
              onClick={() => handleClick(quiz)} // Pass quiz as an argument
            >
              Start Quiz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizzScreen;
