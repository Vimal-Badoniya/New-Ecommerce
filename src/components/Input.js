import React  from "react";
import "./Input.css";


const Input = React.forwardRef((props , ref) => {
  return (
    <React.Fragment>
      <label htmlFor={props.id} className="form-label">{props.labelName}</label>
      <input id={props.id} name={props.id} type={props.type} className="form-input" ref={ref} value={props.defaultValue}></input>
    </React.Fragment>
  );
});

export default Input;
