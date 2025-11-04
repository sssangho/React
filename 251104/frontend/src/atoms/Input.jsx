function Input({ value, onChange, placeholder, style }) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      style={style}
    />
  );
}

export default Input;
