import React from 'react'
import './portfolio.css'
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.jpg'
import img3 from '../../assets/3.jpg'
import img4 from '../../assets/editor.png'
import img5 from '../../assets/Home-furnishings.jpg'
import img6 from '../../assets/portfolio3.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img6} alt="Portfolio" />
          </div>
          <h3>Consulting company </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Charity-Platform/charity_platform_frontend"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://charity-platform-frontend.vercel.app/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img1} alt="Portfolio" />
          </div>
          <h3>Resturant Food Choices</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ahmedanwersaber/resturant"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://resturant-o1ka.onrender.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img3} alt="Portfolio" />
          </div>
          <h3>Dental-Clinic</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ahmedanwersaber/dental-clinic"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://ahmedanwersaber.github.io/dental/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img2} alt="Portfolio" />
          </div>
          <h3>E-Commerce Application</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ahmedanwersaber/E-commerce-reactjs-app/tree/main"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://e-commerce-reactjs-app.onrender.com/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img4} alt="Portfolio" />
          </div>
          <h3>Image Editor </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ahmedanwersaber/editor-image"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://ahmedanwersaber.github.io/editor-image/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={img5} alt="Portfolio" />
          </div>
          <h3>Home-furnishings</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Ahmedanwersaber/Home-furnishings"
              className="btn"
            >
              Github
            </a>
            <a
              href="https://ahmedanwersaber.github.io/Home-furnishings/"
              target="_blank"
              className="btn btn-primary"
            >
              Demo
            </a>
          </div>
        </article>
        <p >*  more Project in my github ...</p>
      </div>
    </section>
  );
};

export default Portfolio;