import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../styles/Contact.css";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_63p8loa",
        "template_1105ra9",
        form.current,
        "d2D3tnqeCHG01A1Gi"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Thank you for your response");
    e.target.reset();
  };

  return (
    <div>
      <div className="display">
        <h1 className="h1-style">Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name: </label>
          <br></br>
          <input
            type="text"
            placeholder="First Name, Surname eg Joe Smith"
            name="from_name"
            required
          />
          <br></br>
          <label>Email: </label>
          <br></br>
          <input
            type="email"
            placeholder="eg Joesmith@gmail.com"
            name="from_email"
            required
          />
          <br></br>
          <label>Message: </label>
          <br></br>
          <textarea
            placeholder="Your message .........."
            name="message"
            required
          />
          <br></br>
          <br></br>
          <input type="submit" value="Send Message" />
        </form>
      </div>
    </div>
  );
}

export default Contact;
