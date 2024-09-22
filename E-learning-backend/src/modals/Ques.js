
  // Replace with the actual path to your model file


import { Quizz } from "./Quizz.js";

// Sample quiz data

const quizzes = [
  {
    title: 'General Knowledge Quiz',
    description: 'A quiz to test your general knowledge.',
    category: 'General Knowledge',

    banner_url:"https://cdn.weqyoua.com/files/quiz_banner2/banner/49472/5359j.png",
    questions: [
      {
        question: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswer: 'Paris',
      },
      {
        question: 'Who wrote "To Kill a Mockingbird"?',
        options: ['Harper Lee', 'George Orwell', 'J.K. Rowling', 'Mark Twain'],
        correctAnswer: 'Harper Lee',
      },
      {
        question: 'Which planet is closest to the sun?',
        options: ['Earth', 'Mars', 'Mercury', 'Venus'],
        correctAnswer: 'Mercury',
      },
      {
        question: 'What is the largest ocean on Earth?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Southern Ocean'],
        correctAnswer: 'Pacific Ocean',
      },
      {
        question: 'In which year did the Titanic sink?',
        options: ['1910', '1912', '1914', '1916'],
        correctAnswer: '1912',
      },
    ],
    createdBy: null, // Assign a valid user ID once a user is created (this can be done later)
  },
  {
    title: 'Science Quiz',
    description: 'A quiz to test your science knowledge.',
    category: 'Science',
    banner_url:"https://th.bing.com/th/id/OIP.mgW_OClc6VHe8r3k58yhkgHaD4?rs=1&pid=ImgDetMain",
    questions: [
      {
        question: 'What is the chemical symbol for water?',
        options: ['H2O', 'CO2', 'O2', 'N2'],
        correctAnswer: 'H2O',
      },
      {
        question: 'How many bones are in the human body?',
        options: ['206', '205', '207', '208'],
        correctAnswer: '206',
      },
      {
        question: 'What is the speed of light?',
        options: ['3 x 10^8 m/s', '2 x 10^8 m/s', '4 x 10^8 m/s', '5 x 10^8 m/s'],
        correctAnswer: '3 x 10^8 m/s',
      },
      {
        question: 'Which gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Hydrogen', 'Carbon Dioxide', 'Nitrogen'],
        correctAnswer: 'Carbon Dioxide',
      },
      {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
        correctAnswer: 'Mitochondria',
      },
    ],
    createdBy: null, // Assign a valid user ID once a user is created (this can be done later)
  },
];

// Function to insert quizzes
export const insertQuizzes=async()=> {
  console.log('insert')
  try {
    await Quizz.insertMany(quizzes);
    console.log('Quizzes inserted successfully');
   
  } catch (error) {
    console.error('Error inserting quizzes:', error);
   
  }
}

// Call the function

