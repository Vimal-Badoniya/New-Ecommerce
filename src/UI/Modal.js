import React from "react";
import "./Modal.css";

const Modal = (prosp)=>{
    return (
        <div className="background">
            <div className="overlay">{prosp.children}</div>
        </div>
    )
};

export default React.memo(Modal);