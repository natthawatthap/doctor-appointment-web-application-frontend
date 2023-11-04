import axios from "axios";

const BASE_URL = "http://localhost:8080"; // Base URL for your API

export const getSchedule = async (specialties) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/schedule`, {
      params: { specialties }, // Pass specialties as a query parameter
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};