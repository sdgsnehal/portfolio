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
            <a href='//www.instagram.com/sdgsnehal/?igshid=Y2M0YTlkZGNmOQ%3D%3D'><AiOutlineInstagram/></a>
            <a href='//twitter.com/sdgsnehal?t=FAFQA4ijMdlt81x_MsIz6A&s=09'><BsTwitter/></a>

        </div>
        <div className='footer__copyright'>
            <small>&copy;SDGSNEHAl. All rights reserved</small>
        </div>
    </footer>
  )
}

export default Footer