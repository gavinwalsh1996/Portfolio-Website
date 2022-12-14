import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../css/ContactForm.scss'
import SmlButton from './SmlButton';

function ContactForm() {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_3rs7qyj', 'template_8r9mzob', form.current, 'GY1GNoLWTLkj2z7eF') 
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (

  <form ref={form} onSubmit={sendEmail}>
    <input type="text" name="user_name" placeholder='Name' />
    <input type="email" name="user_email" placeholder='Email'/>
    <textarea name="message" placeholder='Message'/>
    <SmlButton type="submit" value="Submit" />
  </form>

  );
};

export default ContactForm