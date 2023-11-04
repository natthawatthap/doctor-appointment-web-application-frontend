// ScheduleSelector.js

import React from "react";
import Slider from "react-slick";
import { Button } from "antd";
import moment from "moment";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ScheduleSelector.css";

const ScheduleSelector = ({ selectedMonth, onDateSelect, selectedDate }) => {
  const daysInMonth = moment(selectedMonth, "MMMM").daysInMonth();

  const generateDayButtons = () => {
    const buttons = [];

    for (let i = 1; i <= daysInMonth; i++) {
      const date = moment(`${i}-${selectedMonth}`, "D-MMMM").format("ddd D");

      buttons.push(
        <div key={i}>
          <Button
           danger={date === selectedDate}
            onClick={() => onDateSelect(date)}
          >
            {date}
          </Button>
        </div>
      );
    }

    return buttons;
  };

  const settings = {
    infinite: false,
    slidesToShow: 4.5,
    slidesToScroll: 4,
  };

  return <Slider {...settings}>{generateDayButtons()}</Slider>;
};

export default ScheduleSelector;
