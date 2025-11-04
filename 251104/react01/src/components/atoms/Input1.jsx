import React from "react";
import "./Input.css";

const Input = ({
  type = "text",
  placeholder = "내용을 입력하세요",
  value,
  onChange,
  disabled = false,
  size = "medium", // 🔹 크기 prop 추가
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`input input--${size} ${disabled ? "input--disabled" : ""}`}
    />
  );
};

export default Input;
