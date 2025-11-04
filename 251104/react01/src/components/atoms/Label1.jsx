import React from "react";
import "./Label.css";

const Label = ({ text, htmlFor, required = false }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {text}
      {required && <span className="label__required">*</span>}
    </label>
  );
};

export default Label;
