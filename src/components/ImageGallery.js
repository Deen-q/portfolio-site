import React from 'react'
import './ImageGallery.css'
import figmaIcon from '../images/figma.png'
import jestIcon from '../images/jest.png'
import nodejsIcon from '../images/nodejs.png'
import reactIcon from '../images/react.png'
import javascriptIcon from '../images/javascript.png'

export default function ImageGallery() {
  return (
    <div className='stackIcons'>
    <img src={javascriptIcon} alt='Javascript Icon'></img>
    <img src={reactIcon} alt='React.js icon'></img>
    <img src={nodejsIcon} alt='Node.js Icon'></img>
    <img src={jestIcon} alt='Jest Icon'></img>
    <img src={figmaIcon} alt='Figma Icon'></img>
    </div>
  )
}
