import React, { Fragment } from 'react';
import DotsPNG from '../../img/dots.png';
import PortraitIMG from '../../img/portrait.png';

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
        </div>
      </div>
    </Fragment>
  );
};

export default Presentation;
