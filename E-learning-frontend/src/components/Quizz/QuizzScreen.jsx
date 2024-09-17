import React, { useState, useEffect } from 'react';
import { useTimer } from 'react-timer-hook';

function QuizzScreen() {
  const mcqQuestions = [
    {
      question: "What is the capital of France?",
      options: [
        { option: "A", answer: "Berlin" },
        { option: "B", answer: "Madrid" },
        { option: "C", answer: "Paris" },
        { option: "D", answer: "Lisbon" }
      ],
      correctAnswer: "C"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: [
        { option: "A", answer: "Earth" },
        { option: "B", answer: "Mars" },
        { option: "C", answer: "Jupiter" },
        { option: "D", answer: "Saturn" }
      ],
      correctAnswer: "B"
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        { option: "A", answer: "Atlantic Ocean" },
        { option: "B", answer: "Indian Ocean" },
        { option: "C", answer: "Arctic Ocean" },
        { option: "D", answer: "Pacific Ocean" }
      ],
      correctAnswer: "D"
    },
    {
      question: "Which gas do plants absorb from the atmosphere?",
      options: [
        { option: "A", answer: "Oxygen" },
        { option: "B", answer: "Carbon Dioxide" },
        { option: "C", answer: "Nitrogen" },
        { option: "D", answer: "Hydrogen" }
      ],
      correctAnswer: "B"
    }
  ];

  const timerDuration = 30; // Set the duration for each question timer (in seconds)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false); // Track if quiz is finished

  // Set up the timer using the react-timer-hook
  const { seconds, start, restart } = useTimer({
    expiryTimestamp: new Date().getTime() + timerDuration * 1000,
    onExpire: () => handleNext(), // Move to the next question when the timer expires
  });

  useEffect(() => {
    // Start the timer whenever the question changes
    restart(new Date().getTime() + timerDuration * 1000);
    start(); // Start the timer

    // Cleanup function to stop the timer when the component unmounts
    return () => {
      restart(new Date().getTime());
    };
  }, [currentQuestionIndex]);

  const handleNext = () => {
    // Check if the selected option is correct
    if (selectedOption === mcqQuestions[currentQuestionIndex].correctAnswer) {
      setScore(score + 1); // Increment score for correct answer
    }
    else{
      setScore(score-1);
    }

    if (currentQuestionIndex < mcqQuestions.length - 1) {
      setSelectedOption(null); // Clear selected option for the next question
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Handle end of quiz logic here
      setQuizFinished(true);
    }
  };

  return (
    <div className="flex flex-col min-w-full justify-between min-h-screen p-4 md:p-8 lg:p-12">
      {!quizFinished ? (
        <>
          <div className="bg-blue-600 h-18 w-full flex items-center justify-between rounded-t-lg px-4 py-4"> 
            <h2 className="text-lg md:text-2xl font-semibold">
              Question {currentQuestionIndex + 1} of {mcqQuestions.length}
            </h2>
            <div className="text-lg md:text-xl font-semibold">
              {Math.floor(seconds / 60)}:{seconds % 60 < 10 ? `0${seconds % 60}` : seconds % 60}
            </div>
          </div>
          <div className="flex flex-col flex-grow space-y-4 w-full relative"> {/* Add relative here */}
            <div className="bg-white shadow-md rounded-lg p-4 flex-grow">
              <h3 className="text-lg md:text-xl font-bold mb-4">{mcqQuestions[currentQuestionIndex].question}</h3>
              <ul className="options-list list-none pl-0">
                {mcqQuestions[currentQuestionIndex].options.map(option => (
                  <li key={option.option} className="flex items-center my-5">
                    <input 
                      type="radio" // Changed to radio for single selection
                      id={option.option} 
                      name="quiz-option" // Grouping for radio buttons
                      checked={selectedOption === option.option} 
                      onChange={() => setSelectedOption(option.option)} 
                      className="form-radio h-5 w-5 text-blue-600 border-gray-300 rounded mr-2 cursor-pointer"
                    />
                    <label htmlFor={option.option} className="text-base md:text-lg">
                       {option.answer}
                    </label>
                  </li>
                ))}
              </ul>
            </div>
            {/* Next Button Section */}
            <div className="absolute bottom-4 right-4 w-fit"> {/* Absolute positioning here */}
              <button 
                onClick={handleNext} 
                className="bg-blue-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Next
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Quiz Finished!</h2>
          <p className="text-lg md:text-2xl font-semibold">Your Score: {score} / {mcqQuestions.length}</p>
        </div>
      )}
    </div>
  );
}

export default QuizzScreen;
