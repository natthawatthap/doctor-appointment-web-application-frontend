import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Select, Divider, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import moment from "moment";
import TimeSelector from "../components/TimeSelector";
import ScheduleSelector from "../components/ScheduleSelector";

const { Option } = Select;

const BookingAppointmentPage = () => {
  const navigate = useNavigate();
  const months = moment.months();

  const currentMonth = moment().format("MMMM"); // Get the current month

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [visibleDays, setVisibleDays] = useState(4);

  const handleSelectChange = (value) => {
    setSelectedMonth(value);
  };

  const handleBackToBooking = () => {
    navigate("/booking");
  };

  const handleScheduleSelector = (date) => {
    setSelectedDate(date);
    console.log(selectedDate);
  };

  const handleTimeSelector = (time) => {
    setSelectedTime(time);
    console.log(selectedTime);
  };

  const generateDayButtons = () => {
    const daysInMonth = moment(selectedMonth, "MMMM").daysInMonth();
    const buttons = [];

    for (let i = 1; i <= daysInMonth; i++) {
      buttons.push(
        <Button key={i} type="primary">
          {moment(`${i}-${selectedMonth}`, "D-MMMM").format("ddd D")}
        </Button>
      );
    }

    return buttons;
  };

    const handlePrevDays = () => {
    setVisibleDays(visibleDays - 4);
  };

  const handleNextDays = () => {
    setVisibleDays(visibleDays + 4);
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
        <Select
          defaultValue="Select"
          style={{ width: 200 }}
          onChange={handleSelectChange}
        >
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
        </Select>
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
      {generateDayButtons()} {/* Render the generated buttons */}
      <Divider />
      <TimeSelector onClick={handleTimeSelector} />

      <Divider />
      <Button type="primary" danger style={{ width: "100%" }}>
        Book Now
      </Button>
    </div>
  );
};

export default BookingAppointmentPage;
