import React from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_63p8loa', 'template_1105ra9', form.current, 'd2D3tnqeCHG01A1Gi')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };
  
    return (
      <form ref={form} onSubmit={sendEmail}>
        
        <label>Name: </label>
        <br></br>
        <input type="text" name="from_name" />
        <br></br>
        <label>Email: </label>
        <br></br>
        <input type="email" name="from_email" />
        <br></br>
        <label>Message: </label>
        <br></br>
        <textarea name="message" />
        <br></br>
        <br></br>
        <input type="submit" value="Send" />
      </form>
    
    );
}




export default Contact;