import React, { Fragment } from 'react';
import ServiceHolder from '../service/ServiceHolder';
import { Element } from 'react-scroll';

const Services = () => {
  const titleArr = [
    'Web development',
    'Mobile applications',
    'Maintanance',
    'Deployment',
  ];
  const subtitleArr = [
    'From idea to full-fledged webistes, I build creative, responsive and user friendly experiences using the latest technology available',
    "Building a native Android application is almost a daily practice. If you are interested in using Firebase or Amazon AWS, I've got you covered",
    'I provide assistance throughout and after delivering a product. I help analysing useful data (such as Google statistics) and improve the product.',
    'Using the latest cloud platform and deployment technologies. We can opt to use Docker orchestration and/or AWS deployment with EC2 instances',
  ];
  const paragraphObj = {
    0: [
      '- UI/UX Research and designs',
      '- Pure CSS/SASS styling',
      '- Back-end servers with powerful languages, (NodeJS and Python)',
      '- Front-end pages developed with React and Redux for an immersive statement management',
    ],
    1: [
      '- UI/UX Research and designs',
      '- Java/Kotlin language of preference',
      '- Experience with Firebase and AWS',
    ],
    2: [
      '- Google Analytics insights',
      '- Debugging and error fixes',
      '- Deployment scaling',
    ],
    3: [
      '- Searching for necessary Docker images',
      '- Documenting and building docker files',
      '- Preparing EC2 instances ',
    ],
  };

  return (
    <Element id='services' name='services'>
      <div className='margin-144-auto text-center'>
        <h1>Services</h1>
      </div>
      {Object.keys(paragraphObj).map((key, idx) => (
        <ServiceHolder
          key={idx}
          svg={key}
          title={titleArr[key]}
          subtitle={subtitleArr[key]}
          paragraphs={paragraphObj[key]}
        />
      ))}
    </Element>
  );
};

export default Services;
