import React from "react";
import { useNavigate } from 'react-router-dom';
import { Card, Button } from "antd";
import { LogoutOutlined } from "@ant-design/icons";

const BookingPage = () => {
  const navigate = useNavigate();

  const handleBookingAppointment = () => {
    navigate('/booking-appointment');
  };
  return (
    <div>
      <h1>Booking Appointments</h1>

      <Button type="primary" icon={<LogoutOutlined />}>
        Logout
      </Button>
      <h2>Today</h2>
      <Card
        style={{
          margin: "10px", // Adjust margin as needed
          backgroundColor: "#f0f0f0",
        }}
      >
        <p>Dr. Halima Sheppard</p>
        <p>09:00 AM</p>
        <p>Cardiologist</p>
        <p>Map Icon: Davin Clinic</p>
      </Card>

      <h2>14 February 2023</h2>
      <Card>
        <p>Dr. Halima Sheppard</p>
        <p>09:00 AM</p>
        <p>Cardiologist</p>
        <p>Map Icon: Davin Clinic</p>
      </Card>

      <Button type="primary" onClick={handleBookingAppointment}>
        + Booking Appointment
      </Button>
    </div>
  );
};

export default BookingPage;
