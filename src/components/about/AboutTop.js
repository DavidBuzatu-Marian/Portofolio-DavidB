import React from 'react';
import { ReactComponent as AboutSVG } from '../../img/about.svg';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const AboutTop = () => {
  return (
    <div className='row'>
      <div className='col'>
        <AboutSVG height='512px' width='615px' className='about-svg' />
      </div>
      <div className='col'>
        <h1>About me</h1>
        <h2 className='mt-32'>Who am I?</h2>
        <div className='mt-32'>
          <h6 className='regular'>
            I am David Buzatu, a future student at the Univ. of Birmingham and a
            full-stack developer for web and mobile apps.
          </h6>
          <h6 className='regular'>
            My passion for coding, ambition and quick learning abilities make me
            succeed with any project I work on.
          </h6>
        </div>
        <button className='mt-32 btn btn-round-right'>
          <i className='fas fa-chevron-right'></i>{' '}
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
          >
            Let's create together
          </ScrollLink>
        </button>
        <h2 className='mt-32 subtitle'>
          There is no problem without solution. I will do the hard work for you.
        </h2>
      </div>
    </div>
  );
};

export default AboutTop;
