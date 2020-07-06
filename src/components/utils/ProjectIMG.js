import React from 'react';
const ProjectIMG = ({ image, projectURL }) => {
  return (
    <a href={projectURL} target='_blank' rel='noopener noreferrer'>
      <img src={image} alt='project' className='project-img' />
    </a>
  );
};

export default ProjectIMG;
