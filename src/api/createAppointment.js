import axios from "axios";

const BASE_URL = "http://localhost:8080"; // Base URL for your API

export const createAppointment = async () => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from local storage

    if (!token) {
      // Handle case when token is not available
      throw new Error("Authentication token is missing");
    }

    const config = {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the Authorization header
      },
    };

    const response = await axios.post(`${BASE_URL}/api/appointment`, {}, config);
    return response.data.appointments;
  } catch (error) {
    // Handle error
    throw error;
  }
};
