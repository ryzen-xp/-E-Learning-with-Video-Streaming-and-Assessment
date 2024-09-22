import axios from "axios";
import Base_Url from "../../Base_Url";

// Login API call
const login = async (postData) => {
  try {    
    console.log(postData);
    // Sending POST request with user data (postData) to login endpoint
   const response =  await axios.post(`${Base_Url}/api/user/login`, postData);
  console.log(response.data.token)
  localStorage.setItem('token',response?.data?.token);
   return response.data.message;
  } catch (error) {
    console.log("Error in login API:", error);
    throw error;
  }
};

// Register API call
const register = async (postData) => {
  try {
    // Use POST request instead of GET, because registration typically involves submitting user data
    await axios.post(`${Base_Url}/user/register`, postData);
  } catch (error) {
    console.log("Error in register API:", error);
    throw error;
  }
};

export { login, register };
