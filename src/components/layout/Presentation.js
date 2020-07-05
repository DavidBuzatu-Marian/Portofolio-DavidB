import React, { Fragment } from 'react';
import DotsPNG from '../../img/dots.png';
import PortraitIMG from '../../img/portrait.png';
import ExternalLinks from '../utils/ExternalLinks';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const Presentation = () => {
  return (
    <Fragment>
      <img
        src={PortraitIMG}
        alt='portrait'
        className='portrait-img pos-absolute'
      />
      <div className='container mx-auto'>
        <img src={DotsPNG} alt='dots' className='mt-144 pos-absolute' />
        <div className='container-title'>
          <h1 className='light'>Hello, I'm David</h1>
          <h1 className='extra-bold'>I craft ideas into real software</h1>
          <div className='contact-btn-container mt-144'>
            <button className='btn btn-round'>
              <ScrollLink
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
                activeClass='active'
              >
                <i className='fas fa-chevron-right'></i>
              </ScrollLink>
            </button>
            <p className='contact-p'>Let's invision together</p>
          </div>
          <ExternalLinks />
        </div>
      </div>
    </Fragment>
  );
};

export default Presentation;
