import React from 'react'
import avatar from "./avatar.png"
import './App.css'
import githubCat from "./githubCat.png"
import linkedinIcon from "./linkedinIcon.png"

export default function App() {
  return (
    <>
    <div className='NavBar'>
      <div className='NavBarButtons'>
      <button>Home</button>
      <button>About</button>
      <button>Portfolio</button>
      <button>Contact Me</button>
      </div>
    </div>

    <div className='Segment1'>
        <div className='TextContainer'>
    <h1>Hi, I'm Deen.</h1>
    <h3>...with 2 e's.</h3>
    <h2>Full stack web developer.</h2>

      <div className='IconContainer'>
      <a href="https://www.youtube.com/watch?v=AKGrmY8OSHM" target="_blank" rel="noopener noreferrer">
        <img src={githubCat} 
        className='githubCat' alt='GitHub Icon'/>
        </a>

        <a href="https://www.youtube.com/watch?v=AKGrmY8OSHM" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon}
        className='linkedinIcon' alt='LinkedIn Icon'/>
        </a>
      </div> {/*End of IconContainer*/}

    </div> {/*End of TextContainer*/}

        <div className="ImageContainer">
    <img className="AvatarImg" src={avatar} alt="SoC Avatar"/>
        </div>
    </div> {/*End of Segment1 div*/}


    <div className='Segment2'>
      <div className='TextContainer'>
        <h1>About me</h1>
        <h3>Lorem Ipsum</h3>
        <h3>*Insert Icons for Webstack*</h3>
      </div>
    </div>
    </>
  )
}