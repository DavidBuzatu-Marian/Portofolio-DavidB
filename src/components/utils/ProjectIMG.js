import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIMG = ({ image, projectURL }) => {
  return (
    <Link to={{ pathname: projectURL }} target='_blank'>
      <img src={image} alt='project' className='project-img' />
    </Link>
  );
};

export default ProjectIMG;
