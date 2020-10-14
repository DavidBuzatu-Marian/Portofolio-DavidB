import React from 'react';
import Scroll from 'react-scroll';

const ScrollLink = Scroll.Link;

const onClick = (e) => {
  const navbar = document.getElementsByClassName('navbar')[0];
  if (navbar.classList.contains('left-0')) {
    navbar.classList.remove('left-0');
  } else {
    navbar.classList.add('left-0');
  }
};

const Navbar = () => {
  return (
    <nav>
      <ul className='navbar pl-144'>
        <li>
          <ScrollLink
            to='portofolio'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
            onClick={(e) => onClick(e)}
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
            onClick={(e) => onClick(e)}
          >
            Services
          </ScrollLink>
        </li>
        <li>
          <a
            href='https://drive.google.com/file/d/1Hnt51mRfurSl_qadZZKkn18vSnVP_0Ib/view?usp=sharing'
            target='_blank'
            rel='noopener noreferrer'
          >
            {' '}
            Resume
          </a>
        </li>
        <li>
          <ScrollLink
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            activeClass='active'
            onClick={(e) => onClick(e)}
          >
            Contact
          </ScrollLink>
        </li>
      </ul>
      <button className='navbar-open' onClick={(e) => onClick(e)}></button>
    </nav>
  );
};

export default Navbar;
