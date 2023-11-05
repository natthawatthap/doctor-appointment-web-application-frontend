import axios from "axios";

import { BASE_URL } from '../config';

export const getAppointment = async () => {
  try {
    const token = localStorage.getItem("token"); 

  
    const response = await axios.get(`${BASE_URL}/api/appointment`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    return response.data.appointments;
  } catch (error) {
    // Handle error
    throw error;
  }
};