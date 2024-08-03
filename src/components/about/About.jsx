import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {BsAward} from 'react-icons/bs'
import {RiUserStarLine} from 'react-icons/ri'
import {HiOutlineDocumentReport} from 'react-icons/hi'
import {MdComputer} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h4 className='text-h4'>I'm a Developer</h4>
      <h2>About Me</h2>
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <BsAward className='about__icon' />
              <h5>Experience</h5>
              <small> 1 + Years</small>
            </article>

            <article className='about__card'>
              <HiOutlineDocumentReport className='about__icon' />
              <h5>Projects</h5>
              <small>50+ Completed</small>
            </article>

            <article className='about__card'>
              <RiUserStarLine className='about__icon' />
              <h5>Clients</h5>
              <small>10+ Worldwide</small>
            </article>
          </div>

          <p>

          I have significant experience in web development, particularly in using technologies such as React.js, Bootstrap, and CSS to create dynamic and responsive web pages. One of my notable projects includes developing a book store page with advanced book filtering functionality. I have also worked on enhancing page designs for better text presentation. In addition to my technical skills, I have successfully collaborated with startup companies and worked as part of a team, allowing me to gain a deep understanding of teamwork dynamics and project management. My freelancing experience has further honed my ability to work effectively with diverse teams and deliver high-quality solutions to clients.          </p>

          <a href="#contact" className='btn btn-primary'>Reach Me</a>
        </div>
      </div>
    </section>
  )
}

export default About