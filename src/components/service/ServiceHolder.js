import React, { Fragment } from 'react';
import { ReactComponent as WebSVG } from '../../img/web-illustration.svg';
import { ReactComponent as MobileSVG } from '../../img/mobile-illustration.svg';
import { ReactComponent as MaintananceSVG } from '../../img/maintanance-illustration.svg';
import { ReactComponent as DeploymentSVG } from '../../img/deployment-illustration.svg';
import Dots from '../../img/dots-services.png';

const ServiceHolder = ({ svg, title, subtitle, paragraphs }) => {
  const svgArr = [
    <WebSVG width='480px' height='304px' className='web-svg' />,
    <MobileSVG width='480px' height='491.78px' className='mobile-svg' />,
    <MaintananceSVG
      width='480px'
      height='368.82px'
      className='maintanance-svg'
    />,
    <DeploymentSVG width='675px' height='490px' className='deployment-svg' />,
  ];
  const leftContent = (
    <div className='row'>
      <div className='col'>{svgArr[svg]}</div>
      <div className='col'>
        <h2 className='title'>{title}</h2>
        <h6 className='regular mt-32'>{subtitle}</h6>
        <div className='mt-32'>
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className='thin'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  const rightContent = (
    <div className='row'>
      <div className='col'>
        <h2 className='title'>{title}</h2>
        <h6 className='regular mt-32'>{subtitle}</h6>
        <div className='mt-32'>
          {paragraphs.map((paragraph, idx) => (
            <p key={idx} className='thin'>
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <div className='col'>{svgArr[svg]}</div>
    </div>
  );

  return (
    <Fragment>
      {svg % 2 === 0 ? (
        <img
          src={Dots}
          alt='dots'
          className='pos-absolute dots-services-right'
        />
      ) : (
        <img
          src={Dots}
          alt='dots'
          className='pos-absolute dots-services-left hidden-mobile'
        />
      )}
      <div className='container margin-72-auto'>
        {svg % 2 === 0 ? leftContent : rightContent}
      </div>
    </Fragment>
  );
};

export default ServiceHolder;
