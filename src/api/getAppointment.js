import axios from "axios";

const BASE_URL = "http://localhost:8080"; // Base URL for your API

export const getAppointment = async () => {
  try {
    // Update the endpoint to retrieve the bookings
    const response = await axios.get(`${BASE_URL}/api/appointment`);
    return response.data.appointments;
  } catch (error) {
    // Handle error
    throw error;
  }
};
