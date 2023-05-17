import React from 'react';
import './about.css';
import ME from '../../assets/me2about.jpg';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
     <h5>Get To Know</h5>
     <h2>About Me</h2>
     <div className="container about__container">
      <div className="about__me">
        <img src={ME} alt="About Image" className="about__me-image"/>
      </div>
      <div className="about_content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className='about__icon'></FaAward>
            <h5>Experience</h5>
            <small>2+ Years Working</small>

          </article>
          <article className="about__card">
            <FiUsers className='about__icon'></FiUsers>
            <h5>Clients</h5>
            <small>10+ Worldwide</small>

          </article>
          <article className="about__card">
            <VscFolderLibrary className='about__icon'></VscFolderLibrary>
            <h5>Projects</h5>
            <small>10+ Completed</small>

          </article>

        </div>
        <p>
        Crio graduated with 3 years of full stack development experience. I am passionate about building great software that improves the lives of those around me. With experience in creating software for small businesses, individuals, and large corporations, I am able to meet the needs of all types of clients.
        </p>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>



     </div>


    </section>
  )
}

export default About