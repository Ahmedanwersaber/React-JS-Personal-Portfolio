import React from 'react'
import './services.css'
import {FiCheckCircle} from 'react-icons/fi'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container serices__container">
        <article className='service'>
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Apply fundamental UX principles to improve the overall user experience.</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Conduct basic user research to understand user needs and preferences.</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Develop responsive designs that ensure a seamless experience across all devices .</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Utilize modern design tools and techniques to create innovative and user-friendly layouts.</p>
            </li>
           
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>App Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Develop detailed prototypes and wireframes to visualize the app's structure and flow.
              </p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Develop custom mobile applications tailored to meet specific business needs and objectives.</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Design user-friendly interfaces that enhance the overall user experience.</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Integrate third-party services and APIs to extend app functionality.</p>
            </li>
          
          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Build tailor-made websites to meet specific business requirements and objectives.</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Ensure high performance and scalability for all websites.</p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Develop responsive websites that provide a seamless user experience across all devices, including desktops, tablets, and smartphones.
              </p>
            </li>
            <li>
              <FiCheckCircle className='service__list-icon' />
              <p>Implement SEO best practices to improve website visibility and search engine rankings.
              </p>
            </li>
           
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services