import React from 'react';
import EllipseOrange from '../../img/EllipseOrange.png';
import GroupEllipse from '../../img/GroupEllipse.png';
import Project1 from '../../img/project-1.png';
import Project2 from '../../img/project-2.png';
import Project3 from '../../img/project-3.png';
import Project4 from '../../img/project-4.png';
import ProjectIMG from '../utils/ProjectIMG';
import { Element } from 'react-scroll';

const Projects = () => {
  const projectsIMG = [Project1, Project2, Project3, Project4];
  const projectsURL = [
    'https://github.com/DavidBuzatu-Marian/Schedly',
    'https://github.com/DavidBuzatu-Marian/BenchMe',
    'https://github.com/DavidBuzatu-Marian/Bookster',
    'https://github.com/DavidBuzatu-Marian/EasyAlgo',
  ];

  return (
    <Element id='portofolio' name='portofolio'>
      <img
        src={EllipseOrange}
        alt='ellipse'
        className='pos-absolute mt-144 ellipse-projects-img'
      />
      <div className='margin-144-auto text-center'>
        <h1>My personal projects</h1>
      </div>
      <div className='container-projects'>
        {projectsIMG.map((projectIMG, idx) => (
          <ProjectIMG
            key={idx}
            image={projectIMG}
            projectURL={projectsURL[idx]}
          />
        ))}
      </div>
      <img
        src={GroupEllipse}
        alt='ellipse'
        className='pos-absolute ellipse-group-projects-img'
      />
    </Element>
  );
};

export default Projects;
