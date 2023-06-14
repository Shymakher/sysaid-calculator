import "./InputField.css";

const InputField = ({ label, inputKey, type, value, onChange, className }) => {
  return (
    <div className={`input ${className}`}>
      <label htmlFor={inputKey}>{label}</label>
      <input
        id={inputKey}
        type={type}
        value={value}
        onChange={(e) => onChange({ [inputKey]: e.target.value })}
      />
    </div>
  );
};

export default InputField;
