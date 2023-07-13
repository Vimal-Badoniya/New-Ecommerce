import React from "react";
import "./Button.css"

const Button = (props)=>{
    return (
        <button className="customButton" onClick={props.click} type={props.type}>{props.children}{props.name}</button>
    )
};

export default React.memo(Button);