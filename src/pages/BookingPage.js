import React, { useEffect, useState } from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { Typography, Card, Button } from "antd";

import {
  LogoutOutlined,
  EnvironmentOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { getAppointment } from "../api/getAppointment";
const { Title } = Typography;

const BookingPage = () => {
  const navigate = useNavigate();
  const [appointments, setAppointments] = useState([]);

  
  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const appointmentsData = await getAppointment();
        console.log(appointmentsData);
        setAppointments(appointmentsData);
        const groupedAppointments = {};

appointmentsData.forEach(appointment => {
  if (!groupedAppointments[appointment.date]) {
    groupedAppointments[appointment.date] = [];
  }
  groupedAppointments[appointment.date].push(appointment);
});

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
        <Title level={4} style={{ flex: 1, textAlign: "center" }}>
          Booked Appointments
        </Title>

        <Button
          icon={<LogoutOutlined style={{ color: "red" }} />}
          onClick={handleLogout}
          type="text"
        />
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
              {moment(appointment.date).isSame(new Date(), "day")
                ? "Today"
                : moment(appointment.date).format("D MMMM YYYY")}
            </h6>
            <Card
              style={{
                margin: "5px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div>
                  <p style={{ fontWeight: "bold" }}>{appointment.doctorName}</p>
                  <p style={{ color: "gray" }}>{appointment.specialty}</p>
                </div>
                <div>
                  <p style={{ fontWeight: "bold" }}>
                    {moment(appointment.time, "HH:mm").format("hh:mm A")}
                  </p>
                  <p style={{ fontWeight: "bold" }}>
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
        style={{
          width: "90%",
          position: "fixed",
          bottom: "10px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
        onClick={handleBookingAppointment}
        icon={<PlusOutlined />}
      >
        Booking Appointment
      </Button>
    </div>
  );
};

export default BookingPage;
