import React, { useRef } from "react";
import Input from "../components/Input";
import Button from "../UI/Button";
import "./ContactUs.css";

function ContactUs() {
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();
  const submitHandler = async (event) => {
    event.preventDefault();
    const payloadObj = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      contact: contactRef.current.value,
    };
    await fetch("https://crudcrud.com/api/c28067d0d4254f72a6cfd019cbf5473a/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payloadObj),
    }).then((res) => {
        if(res.ok){console.log("Thank You , We will get Back to you soon")}
      nameRef.current.value = "";
      emailRef.current.value = "";
      contactRef.current.value = "";
    }).catch((error)=>{console.log(error)})
  };
  return (
    <section className="containerSection">
      <h2 className="contactTitle">Please fill the form below...</h2>
      <form>
        <Input labelName="Name" id="name" type="text" ref={nameRef} />
        <Input labelName="Email" id="email" type="email" ref={emailRef} />
        <Input
          labelName="Contact Number"
          id="contact"
          type="number"
          ref={contactRef}
        />
        <Button name="Submit" click={submitHandler} type="submit" />
      </form>
    </section>
  );
}

export default ContactUs;
