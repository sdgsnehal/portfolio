import React, { useRef } from 'react';
import {HiOutlineMail} from 'react-icons/hi';
import {MdOutlineWhatsapp} from 'react-icons/md';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zh9d6an', 'template_bnolloi', form.current, 'KPyaCIv_W6uzZ7uCB')
      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>sdgsnehal@gmail.com</h5>
            <a href='mailto:sdgsnehal@gmail.com' target='_blank'>Send a message</a>

          </article>
          <article className="contact__option">
            <MdOutlineWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            
            <a href='https://wa.me/7387077017' target='_blank'>Send a message</a>

          </article>

        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your full Name' required></input>
          <input type="email" name='email' placeholder='Your Email' required></input>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact