import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactForm.scss'
import SmlButton from './SmlButton';

function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3rs7qyj', 'emplate_8r9mzob', form.current, 'GY1GNoLWTLkj2z7eF') 
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (

    <form ref={form} onSubmit={sendEmail}>
    {/* <label>Name</label> */}
    <input type="text" name="user_name" placeholder='Name' />
    {/* <label>Email</label> */}
    <input type="email" name="user_email" placeholder='Email'/>
    {/* <label>Message</label> */}
    <textarea name="message" placeholder='Message'/>
    {/* <input type="submit" value="Send" /> */}
    <SmlButton type="submit" value="Submit" />
  </form>

  );
};

export default ContactForm