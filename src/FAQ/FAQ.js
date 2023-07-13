import React from "react";
import "./FAQ.css"
import { FcSearch } from "react-icons/fc";

const FAQ = () => {
  return (
    <section className="section">
      <h3>How Can We Help ..?</h3>
     
       <div className="inputdiv">
        <input placeholder="Type your query to search...." className="inputelement"/>
        <button type="submit" className="search" onClick={()=>{console.log("Searching")}}><FcSearch/></button>
       </div>
      

      <div></div>
    </section>
  );
};

export default React.memo(FAQ);
