import React from 'react';
import {BsLinkedin} from 'react-icons/bs';
import {ImGithub} from 'react-icons/im';
import {SiLeetcode} from 'react-icons/si'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://linkedln' target="_blank"><BsLinkedin/></a>
        <a href='https://linkedln' target="_blank"><ImGithub/></a>
        <a href='https://linkedln' target="_blank"><SiLeetcode/></a>

    </div>
  )
}

export default HeaderSocials