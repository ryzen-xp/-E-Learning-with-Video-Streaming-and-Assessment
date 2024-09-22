const quizzesData = [
    {
      title: "Math Quiz",
      description: "Test your knowledge of basic math concepts.",
      category: "Math",
      questions: [
        {
          question: "What is 2 + 2?",
          options: ["1", "2", "3", "4"],
          correctAnswer: "4",
        },
        {
          question: "What is 5 * 6?",
          options: ["30", "26", "24", "36"],
          correctAnswer: "30",
        },
        // Add more questions as needed
      ],
      banner_url: "math-quiz-banner.jpg",
    },
    {
      title: "Science Quiz",
      description: "Explore the world of science.",
      category: "Science",
      questions: [
        {
          question: "What is H2O commonly known as?",
          options: ["Oxygen", "Hydrogen", "Water", "Carbon Dioxide"],
          correctAnswer: "Water",
        },
        {
          question: "What planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: "Mars",
        },
        // Add more questions as needed
      ],
      banner_url: "science-quiz-banner.jpg",
    },
    // Add more quizzes as needed
  ];
  
  export default quizzesData;
  