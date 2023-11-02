import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Card, Button } from "antd";

import { LogoutOutlined, EnvironmentOutlined } from "@ant-design/icons";

import { getAppointment } from "../api/getAppointment";

const BookingPage = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsData = await getAppointment();
        setAppointments(appointmentsData);
      } catch (error) {
        console.error("Error fetching appointments:", error);
      }
    };

    fetchAppointments();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleBookingAppointment = () => {
    navigate("/booking-appointment");
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ flex: 1, textAlign: "center" }}>Booked Appointments</h1>
        <Button
          type="primary"
          icon={<LogoutOutlined />}
          onClick={handleLogout}
        ></Button>
      </div>

      {appointments !== null &&
        appointments.map((appointment) => (
          <div key={appointment.id}>
            <h6
              style={{
                backgroundColor: "#f0f0f0",
                textAlign: "center",
                padding: "10px",
              }}
            >
              {moment(appointment.date).format("D MMMM YYYY")}
            </h6>
            <Card
              style={{
                margin: "10px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p>{appointment.doctorName}</p>
                  <p>{appointment.specialty}</p>
                </div>
                <div>
                  <p>{moment(appointment.time, "HH:mm").format("hh:mm A")}</p>
                  <p>
                    <EnvironmentOutlined /> {appointment.location}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        ))}

      <Button
        type="primary"
        danger
        style={{ width: "100%" }}
        onClick={handleBookingAppointment}
      >
        + Booking Appointment
      </Button>
    </div>
  );
};

export default BookingPage;
