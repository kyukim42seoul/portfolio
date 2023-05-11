import React from 'react';

const InputField = ({ value, onChange, placeholder }) => (
  <input
    type="number"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export default InputField;
