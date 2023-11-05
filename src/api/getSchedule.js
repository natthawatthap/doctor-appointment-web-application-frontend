import axios from "axios";

import { BASE_URL } from '../config';

export const getSchedule = async (specialties) => {
  try {
    const response = await axios.get(`${BASE_URL}/api/schedule`, {
      params: { specialties }, 
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};