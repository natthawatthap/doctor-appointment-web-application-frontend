import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Button, Select, Divider, Row, Col } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import moment from "moment";

const { Option } = Select;
const timeSlots = [
  "08:00 AM",
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "01:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
];

const BookingAppointmentPage = () => {
  const navigate = useNavigate();
  const months = moment.months();

  const currentMonth = moment().format("MMMM"); // Get the current month

  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const handleSelectChange = (value) => {
    setSelectedMonth(value);
  };

  const handleBackToBooking = () => {
    navigate("/booking");
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
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
          defaultValue="Select"
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
      <Button type="primary">Thu 14</Button>
      <Divider />
      <Row gutter={[16, 16]}>
        {timeSlots.map((time, index) => (
          <Col span={8} key={index}>
            <Button type="primary">{time}</Button>
          </Col>
        ))}
      </Row>

      <Divider />
      <Button type="primary" danger style={{ width: "100%" }}>
        Book Now
      </Button>
    </div>
  );
};

export default BookingAppointmentPage;
