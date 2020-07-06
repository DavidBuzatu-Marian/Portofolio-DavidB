import React from 'react';
import Scroll from 'react-scroll';
import MenuPNG from '../../img/menu.png';

const ScrollLink = Scroll.Link;

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul className='navbar ml-144'>
        <li>
          <ScrollLink
            to='portofolio'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
          >
            Portofolio
          </ScrollLink>
        </li>
        <li>
          <ScrollLink
            to='services'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
          >
            Services
          </ScrollLink>
        </li>
        <li>Resume</li>
        <li>
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <img src={MenuPNG} alt='menu' className='navbar-img pos-absolute mr-72' />
    </div>
  );
};

export default Navbar;
