import React from 'react';
import AboutButtons from './AboutButtons';

const AboutBottom = () => {
  const skillsArr = [
    'Quick learner',
    'Leadership',
    'Great teacher',
    'Innovation fervent',
    'Time management',
    'Adaptable',
    'Great communicator',
    'Responsible',
  ];
  return (
    <div className='mt-72 mx-auto-mobile'>
      <h1>My skills</h1>
      <div className='container-skills'>
        {skillsArr.map((skill, idx) => (
          <AboutButtons key={idx} btnText={skill} />
        ))}
      </div>
    </div>
  );
};

export default AboutBottom;
