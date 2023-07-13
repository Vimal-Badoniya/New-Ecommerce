import React,{memo} from "react";
import "./Footer.css"
import {AiFillYoutube} from "react-icons/ai"; 
import {ImFacebook2} from "react-icons/im"; 
import {FaInstagramSquare} from "react-icons/fa"; 

const Footer = ()=>{
    return (
        <div className="footerdiv">
            <span>The Generics</span>
            <span>Follow Us On
                <button className="btn"><AiFillYoutube/></button>
                <button className="btn"><ImFacebook2/></button>
                <button className="btn"><FaInstagramSquare/></button>
            </span>
           
        </div>
    )
};

export default memo(Footer);