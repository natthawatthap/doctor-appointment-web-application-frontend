import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Divider, Typography } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

import SpecialtySelector from "../components/SpecialtySelector";
import MonthSelector from "../components/MonthSelector";

import DateSelector from "../components/DateSelector";
import TimeSelector from "../components/TimeSelector";

import { getSchedule } from "../api/getSchedule";
import createAppointment from "../api/createAppointment";

const { Title } = Typography;

const BookingAppointmentPage = () => {
  const navigate = useNavigate();

  const [selectedSpecialty, setSpecialty] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSpecialtySelectChange = async (specialty) => {
    setSelectedMonth(null);
    setSelectedDate(null);
    setSelectedTime(null);

    try {
      const schedule = await getSchedule(specialty);
      setSchedule(schedule);
      console.log(schedule);
      setSpecialty(specialty);
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  };

  const handleMonthSelector = (month) => {
    setSelectedMonth(month);
  };

  const handleBackToBooking = () => {
    navigate("/booking");
  };

  const handleScheduleSelector = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSelector = (time) => {
    setSelectedTime(time);
  };

  const handleBookNow = async () => {
    try {
      const schedule = await createAppointment(
        selectedSpecialty,
        selectedMonth,
        selectedDate,
        selectedTime
      );
      console.log("Appointment created:", schedule);
      navigate('/booking');
    } catch (error) {
      console.error("Error creating appointment:", error);
    }
  };

  return (
    <div>
      <Button
        onClick={handleBackToBooking}
        icon={<ArrowLeftOutlined style={{ color: "red" }} />}
        type="text"
      />
      <Title level={2}>Booking Appointments</Title>
      <div style={{ margin: "10px 0" }}>
        <SpecialtySelector onSelectChange={handleSpecialtySelectChange} />
      </div>
      {selectedSpecialty && (
        <>
          <div style={{ margin: "10px 0" }}>
            <MonthSelector
              schedule={schedule}
              onSelectChange={handleMonthSelector}
            />
          </div>

          {selectedMonth && (
            <>
              <Title level={5}>Select Schedule</Title>
              <DateSelector
                selectedMonth={selectedMonth}
                onDateSelect={handleScheduleSelector}
                selectedDate={selectedDate}
                schedule={schedule}
              />
              <Divider />
              <TimeSelector onClick={handleTimeSelector} schedule={schedule} />
              <Divider />
            </>
          )}
        </>
      )}

      <Button
        type="primary"
        danger
        style={{ width: "100%" }}
        onClick={handleBookNow}
      >
        Book Now
      </Button>
    </div>
  );
};

export default BookingAppointmentPage;
