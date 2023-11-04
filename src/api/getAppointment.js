import axios from "axios";

const BASE_URL = "http://localhost:8080"; // Base URL for your API

export const getAppointment = async () => {
  try {
    const token = localStorage.getItem("token"); // Retrieve the token from local storage

    // Make a GET request with the token in the headers and email as a query parameter
    const response = await axios.get(`${BASE_URL}/api/appointment`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the headers
      },
    });

    return response.data.appointments;
  } catch (error) {
    // Handle error
    throw error;
  }
};