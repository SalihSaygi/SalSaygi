import React from 'react';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';
import ME from '../../assets/me.jpg';
import './intro.css';

const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2 years of self-learning and 1.5 year of university</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Projects</small>
            </article>
          </div>
          <p>Beginning from covid-19 quarantine, I learned HTML, CSS, and Javacript. To make actual web applications, I went ahead and learned Node.js with Express.js. To make more structured and larger web applications, I learned React.js and Redux. From my data structure and programming courses at university, I learned Python and C++. Outside of courses, I take part in our ACM Chapter at UC Merced to help other CSE students as the president of the club.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default Intro