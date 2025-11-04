import React from "react";
import "./Button.css"; // 스타일 분리

const Button1 = ({ label, onClick, type = "button", variant = "primary", disabled = false }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn--${variant} ${disabled ? "btn--disabled" : ""}`}
    >
      {label}
    </button>
  );
};

export default Button1;
