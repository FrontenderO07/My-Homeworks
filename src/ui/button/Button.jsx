import "./button.css";

const Button = (props, children) => {
  return (
    <button className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
