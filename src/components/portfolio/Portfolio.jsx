import React from 'react';
import IMG1 from '../../assets/mantra.png';
import IMG2 from '../../assets/acm.png';
import IMG3 from '../../assets/95.png';
import IMG4 from '../../assets/loading.png';
import IMG5 from '../../assets/garden.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Mantra',
      img: IMG1,
      description:
        'Google Chrome Extension that lets you make notes and see them instantly when you need them.',
      technologies: 'React | Manifestv3 | Typescript | @editorjs | Mantine',
      link: '',
      github: 'https://github.com/SalihSaygi/Mantra',
    },
    {
      id: 2,
      title: 'ACM @ UC Merced Websit and Admin Backend ',
      img: IMG2,
      description:
        "New website for ACM Chapter at UC Merced where you can see past, current, and future events that are automated using school's API, attend events and get points.",
      technologies: 'React | Firebase | Formik | SASS | Yup',
      link: 'https://acm-chapter-website.web.app/',
      github: 'https://github.com/UCMercedACM/Chapter-Website',
    },
    {
      id: 3,
      title: 'Windows 95 eCommerce Shop',
      img: IMG3,
      description: 'eCommerce Shop with the aesthetic of using a windows 95 OS.',
      technologies: 'React.js | @react95 | Formik | Firebase',
      link: 'https://meri-mg.github.io/To-Do-List/dist/',
      github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'Clubstrap',
      img: IMG4,
      description:
        'Platform to bootstrap your college club. Create and manage or discover many interesting clubs using the discovery page and customizable pages for every club.',
      technologies: 'React.js | Editor.js | Yup | SASS | Firebse | Formik | Mantine.js | Y.js | Refine.js | Typescript | Passport.js | MongoDB | Express.js | JWT | Redis',
      link: '',
      github: 'https://github.com/SalihSaygi/ClubStrap',
    },
    {
      id: 5,
      title: 'Dogegarden Site',
      img: IMG5,
      description:
        'The frontend for the official DogeHouse.js bot & dashboard for DogeHouse.tv.',
      technologies: 'React.js | Next.js | React-Query | Formik | Spotify API | Express.js | Passport.js | Redis | MongoDB | Bcrypt | JWT',
      link: '',
      github: 'https://github.com/dogegarden/gardener-site',
    },

  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
