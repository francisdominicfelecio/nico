import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {FaTelegramPlane} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mcgiidc', 'template_zotk8nf', form.current, 'PhXSPW2Qd_7dvnWta')
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h4>Get In Touch</h4>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
      <div className='contact__options'>
        <article className='contact__option'>
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>ico08@gmail.com</h5>
         
        </article>
        <article className='contact__option'>
          <FaTelegramPlane className='contact__option-icon'/>
          <h4>Telegram</h4>
          <h5>Ico08</h5>
         
        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>WhatsApp</h4>
          <h5>+09056689883</h5>
        
        </article>
      </div>
      {/* END OF CONTACT OPTIONS */}
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required/>
        <input type='email' name='email' placeholder='Your Email' required/>
        <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>
    </section>
  )
}

export default Contact