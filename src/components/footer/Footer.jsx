import React from 'react';
import {AiOutlineInstagram} from 'react-icons/ai';
import {BsTwitter} from 'react-icons/bs';
import './footer.css';

const Footer = () => {
  return (
    <footer>
        <a href='a' className='footer__logo'>SDGSNEHAL</a>
        <ul className='permalinks'>
            <li><a href='a'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#experience'>Expeirence</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#portfolio'>Portfolio</a></li>
            <li><a href='#testimonials'>Testimonials</a></li>
            <li><a href='#contact'>Contact</a></li>
        </ul>
        <div className='footer__socials'>
            <a href=''><AiOutlineInstagram/></a>
            <a href=''><BsTwitter/></a>

        </div>
        <div className='footer__copyright'>
            <small>&copy;SDGSNEHAl. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer