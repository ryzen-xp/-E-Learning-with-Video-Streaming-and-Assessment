import axios from 'axios';
export  const getQuizzes = async()=>{
    try {
      
       const response =  await axios.get(`http://localhost:5000/api/quizzes`)
     
       return response.data;
    } catch (error) {
        console.log('error in getQuizzes',error);
        throw new Error(error);
    }
}