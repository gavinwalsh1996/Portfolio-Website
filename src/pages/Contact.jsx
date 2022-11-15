import React from 'react'
import '../css/Contact.scss';

import Heading from '../components/Heading'
import ContactForm from '../components/ContactForm';

function Contact() {

  let heading = 'Contact'

  return (

    <div className='contact'>
        <Heading heading={heading}/>
        <p className='contact-msg'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
        <ContactForm />
    </div>
  )
}

export default Contact