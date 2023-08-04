import React from 'react';
import './IconGallery.css';
import figmaIcon from '../images/figma.png';
import jestIcon from '../images/jest.png';
import nodejsIcon from '../images/nodejs.png';
import reactIcon from '../images/react.png';
import javascriptIcon from '../images/javascript.png';

export default function IconGallery() {
  return (
    <div className='stackIcons'>

      <div className='iconContainer'>
        <img src={javascriptIcon} alt='Javascript Icon' />
        <p>Javascript</p>
      </div>

      <div className='iconContainer'>
        <img src={reactIcon} alt='React.js icon' />
        <p>React.js</p>
      </div>

      <div className='iconContainer'>
        <img src={nodejsIcon} alt='Node.js Icon' />
        <p>Node.js</p>
      </div>

      <div className='iconContainer'>
        <img src={jestIcon} alt='Jest Icon' />
        <p>Jest</p>
      </div>

      <div className='iconContainer'>
        <img src={figmaIcon} alt='Figma Icon' />
        <p>Figma</p>
      </div>

    </div> // end of stackIcons
  );
}
