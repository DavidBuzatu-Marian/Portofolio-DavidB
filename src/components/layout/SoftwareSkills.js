import React from 'react';
import SkillButton from '../skills/SkillButton';

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
    </div>
  );
};

export default SoftwareSkills;
