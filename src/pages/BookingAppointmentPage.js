import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Select, Divider, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import moment from "moment";
import SpecialtySelector from "../components/SpecialtySelector";
import ScheduleSelector from "../components/ScheduleSelector";
import TimeSelector from "../components/TimeSelector";


import { getSchedule } from "../api/getSchedule";

const { Option } = Select;

const BookingAppointmentPage = () => {
  const navigate = useNavigate();
  const months = moment.months();

  const currentMonth = moment().format("MMMM"); // Get the current month

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const handleSpecialtySelectChange = async (specialty) => {
    try {
      const scheduleData = await getSchedule(specialty);
      console.log("Schedule Data:", scheduleData);
    } catch (error) {
      console.error("Error fetching schedule:", error);
    }
  };

  
  const handleSelectChange = (value) => {
    setSelectedMonth(value);
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

  const handleBookNow = () => {
    console.log("Selected Month:", selectedMonth);
    console.log("Selected Date:", selectedDate);
    console.log("Selected Time:", selectedTime);
  };

  return (
    <div>
      <Button
        type="primary"
        icon={<ArrowLeftOutlined />}
        onClick={handleBackToBooking}
      ></Button>
      <h1>Booking Appointments</h1>
      <div>
        <SpecialtySelector onSelectChange={handleSpecialtySelectChange} />
      </div>
      <div>
        <Select
          defaultValue={currentMonth}
          style={{ width: 200 }}
          onChange={handleSelectChange}
        >
          {months.map((month, index) => (
            <Option key={index} value={month}>
              {month}
            </Option>
          ))}
        </Select>
      </div>
      <h1>Select Schedule</h1>
      <ScheduleSelector
        selectedMonth={selectedMonth}
        onDateSelect={handleScheduleSelector}
        selectedDate={selectedDate}
      />
      <Divider />
      <TimeSelector onClick={handleTimeSelector} />
      <Divider />

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
