import React, { useState, useEffect } from "react";
import { Select } from "antd";
import moment from "moment";

const { Option } = Select;

const MonthSelector = ({ onSelectChange, schedule }) => {
  const months = moment.months().map((month, index) => moment().month(index).format("MMMM YYYY"));
  const availableMonths = [
    ...new Set(schedule.map((item) => moment(item.date).format("MMMM YYYY"))),
  ];

  const [selectedMonth, setSelectedMonth] = useState("");

  useEffect(() => {
    setSelectedMonth("");
  }, [schedule]);

  return (
    <Select
      value={selectedMonth}
      style={{ width: 200 }}
      onChange={(value) => {
        setSelectedMonth(value);
        onSelectChange(value);
      }}
    >
      <Option value="">Select</Option>
      {months.map((month, index) => {
        const isAvailable = availableMonths.includes(month);

        return (
          <Option key={index} value={month} disabled={!isAvailable}>
            {month}
          </Option>
        );
      })}
    </Select>
  );
};

export default MonthSelector;
