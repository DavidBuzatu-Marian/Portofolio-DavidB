import React from 'react';
import SkillButton from '../skills/SkillButton';
import Asteroid from '../../img/asteroid.png';
import LanguageItem from '../skills/LanguageItem';

const SoftwareSkills = () => {
  const skillsArr = [
    'Docker',
    'Express',
    'Django',
    'ReactJS',
    'Redux',
    'AWS - S3 & AWS',
    'MongoDB',
    'Firebase',
  ];

  const languageArr = ['Java', 'Javascript', 'Python', 'C/C++'];

  return (
    <div className='container margin-144-auto'>
      <div className='text-center mx-auto w-skills'>
        <h1>Software skills</h1>
        <h3 className='mt-32'>
          My goal is to create scalable, modern and maintainable software. For
          this, I make use of the latest technologies and most advanced tools:
        </h3>
      </div>
      <div className='mt-32 mb-48 overflow-visible container-skills mx-auto'>
        {skillsArr.map((skill, idx) => (
          <SkillButton key={idx} btnText={skill} />
        ))}
      </div>
      <div className='mt-72'>
        <img
          src={Asteroid}
          alt='asteroid'
          className='pos-absolute skills-img'
        />
        <h2 className='bold header w-75'>
          Great knowledge of the following programming languages:
        </h2>
        <div className='container-languages mt-32'>
          {languageArr.map((language, idx) => (
            <LanguageItem key={idx} language={language} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SoftwareSkills;
