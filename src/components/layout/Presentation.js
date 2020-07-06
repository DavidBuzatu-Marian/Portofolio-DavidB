import React, { Fragment } from 'react';
import DotsPNG from '../../img/dots.png';
import PortraitIMG from '../../img/portrait.png';
import ExternalLinks from '../utils/ExternalLinks';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const Presentation = () => {
  return (
    <Fragment>
      <div className='container mx-auto'>
        <div className='container-title'>
          <img
            src={DotsPNG}
            alt='dots'
            className='mt-negative-dots pos-absolute'
          />
          <h1 className='light'>Hello, I'm David</h1>
          <h1 className='extra-bold'>I craft ideas into real software</h1>
          <div className='contact-btn-container mt-144'>
            <button className='btn btn-circle'>
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
        <img
          src={PortraitIMG}
          alt='portrait'
          className='portrait-img pos-absolute hidden-mobile-xs'
        />
        <div className='container-presentation-img visible-mobile'>
          <div className='box'></div>
          <img
            src={PortraitIMG}
            alt='portrait'
            className='portrait-img pos-absolute'
          />
        </div>
      </div>
    </Fragment>
  );
};

export default Presentation;
