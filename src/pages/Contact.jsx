import React from 'react'
import '../css/Contact.scss';

import Heading from '../components/Heading'
import SmlButton from '../components/SmlButton';
import ContactForm from '../components/ContactForm';

function Contact() {

    let heading = 'Contact'
    let buttonText = 'Submit'

  return (

    <div className='contact'>
        <Heading heading={heading}/>
        <p className='contact-msg'>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.</p>
        <ContactForm />
        {/* <SmlButton value={buttonText}/> */}
    </div>
  )
}

export default Contact