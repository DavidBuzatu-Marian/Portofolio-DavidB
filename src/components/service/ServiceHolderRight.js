import React, { Fragment } from 'react';
import { ReactComponent as WebSVG } from '../../img/web-illustration.svg';
import { ReactComponent as MobileSVG } from '../../img/mobile-illustration.svg';
import { ReactComponent as MaintananceSVG } from '../../img/maintanance-illustration.svg';
import { ReactComponent as DeploymentSVG } from '../../img/deployment-illustration.svg';
import Dots from '../../img/dots-services.png';

const ServiceHolderRight = ({ svg, title, subtitle, paragraphs }) => {
  const svgArr = [
    <WebSVG width='480px' height='304px' />,
    <MobileSVG width='480px' height='491.78px' />,
    <MaintananceSVG width='480px' height='368.82px' />,
    <DeploymentSVG width='675px' height='490px' />,
  ];
  return (
    <Fragment>
      <img src={Dots} alt='dots' className='pos-absolute dots-services-right' />
      <div className='container margin-72-auto'>
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
      </div>
    </Fragment>
  );
};

export default ServiceHolderRight;
