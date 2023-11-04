import React from "react";
import { Select } from "antd";

const { Option } = Select;

const SpecialtySelector = ({ onSelectChange }) => {
  const specialties = [
    "Specialty A",
    "Specialty B",
    "Specialty C",
    "Specialty D",
    "Specialty E",
    "Specialty F",
    "Specialty G",
    "Specialty H",
    "Specialty I",
    "Specialty J",
    "Specialty K",
    "Specialty L",
    "Specialty M",
    "Specialty N",
    "Specialty O",
    "Specialty P",
  ];
  return (
    <Select
      defaultValue="Select"
      style={{ width: 200 }}
      onChange={onSelectChange}
    >
      {specialties.map((specialty, index) => (
        <Option key={index} value={specialty}>
          {specialty}
        </Option>
      ))}
    </Select>
  );
};

export default SpecialtySelector;
