import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import "./TimeSelector.css";
import moment from "moment";

const TimeSelector = ({ onClick, schedule }) => {
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

  const [selectedTime, setSelectedTime] = useState(null);
  const [availableTimeSlots, setAvailableTimeSlots] = useState([]);

  useEffect(() => {
    const availableTimes = schedule.map(item => item.times).flat();
    setAvailableTimeSlots(availableTimes.map(time => moment(time, "HH:mm:ss").format("hh:mm A")));
    console.log(availableTimes);
  }, [schedule]);

  const handleTimeClick = (time) => {
    if (availableTimeSlots.includes(time)) {
      setSelectedTime(time);
      onClick(time);
    }
  };

  return (
    <Row gutter={[16, 16]}>
      {timeSlots.map((time, index) => (
        <Col span={8} key={index}>
          <Button
            onClick={() => handleTimeClick(time)}
            danger={time === selectedTime}
            disabled={!availableTimeSlots.includes(time)}
          >
            {time}
          </Button>
        </Col>
      ))}
    </Row>
  );
};

export default TimeSelector;
