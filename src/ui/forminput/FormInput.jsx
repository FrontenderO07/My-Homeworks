import "./formInput.css";
const FormInput = ({ id, labelName, inputType, placeholder, ...rest }) => {
  console.log("regerg", rest);
  return (
    <div className="formInput">
      <label htmlFor={id}>{labelName}</label>
      <input
      className="input"
        placeholder={placeholder || "..."}
        id={id}
        type={inputType}
        {...rest}
      />
    </div>   
  );
};

export default FormInput;
