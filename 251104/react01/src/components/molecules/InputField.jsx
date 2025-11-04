import React from 'react';
import Label from '../atoms/Label1';
import Input from '../atoms/Input1';

const InputField = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="input-field">
      <Label text={label} />
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default InputField;
