import moment from "moment";
import axios from "axios";

const BASE_URL = "http://localhost:8080"; // Base URL for your API

export const createAppointment = async (
  selectedSpecialty,
  selectedMonth,
  selectedDate,
  selectedTime
) => {
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
    const dateNumber = parseInt(selectedDate.split(" ")[1]);
    const formattedMonth = moment(selectedMonth, "MMMM").format("MM");
    const formattedYear = moment(selectedMonth, "MMMM").format("YYYY");

    console.log(dateNumber,formattedMonth,formattedYear);
 
    const appointmentData = {
      specialty: selectedSpecialty,
      date: `${formattedYear}-${formattedMonth}-${dateNumber}`,
      time: convertTimeFormat(selectedTime),
    };

    console.log(appointmentData);

    const response = await axios.post(
      `${BASE_URL}/api/appointment`,
      appointmentData,
      config
    );
    return response.data.appointments;
  } catch (error) {
    throw error;
  }
};

export default createAppointment;

const convertTimeFormat = (selectedTime) => {
  const formattedTime = moment(selectedTime, "hh:mm A").format("HH:mm:ss");
  return formattedTime;
};
