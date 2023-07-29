import React, { useRef } from 'react'
import avatar from "./avatar.png"
import './App.css'
import githubCat from "./githubCat.png"
import linkedinIcon from "./linkedinIcon.png"

export default function App() {
  const segment1Ref = useRef(null);
  const segment2Ref = useRef(null);
  const segment3Ref = useRef(null);
  const segment4Ref = useRef(null);

  function handleHomeBtnClick() {
    segment1Ref.current.scrollIntoView({ behavior: 'smooth'});
  };

  function handleAboutBtnClick() {
    segment2Ref.current.scrollIntoView({ behavior: 'smooth'});
  };

  function handlePortfolioBtnClick() {
    segment3Ref.current.scrollIntoView({ behavior: 'smooth'});
  };

  function handleContactBtnClick() {
    segment4Ref.current.scrollIntoView({ behavior: 'smooth'});
  };

  return (
    <>
    <div className='NavBar'>
      <div className='NavBarButtons'>
      <button onClick={handleHomeBtnClick}>Home</button>
      <button onClick={handleAboutBtnClick}>About</button>
      <button onClick={handlePortfolioBtnClick}>Portfolio</button>
      <button onClick={handleContactBtnClick}>Contact Me</button>
      </div>
    </div>

    <div className='Segment1' ref={segment1Ref}>
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
        <h3>Pssst, these are clickable</h3>
        <h3>Promise I'll add some animations soon...</h3>
      </div> {/*End of IconContainer*/}

    </div> {/*End of TextContainer*/}

        <div className="ImageContainer">
    <img className="AvatarImg" src={avatar} alt="SoC Avatar"/>
        </div>
    </div> {/*End of Segment1 div*/}


    <div className='Segment2' ref={segment2Ref}>
      <div className='TextContainer'>
        <h1>About me</h1>
        <h3>Lorem Ipsum</h3>
        <h3>*Insert Icons for Webstack*</h3>
      </div>
    </div>

    <div className='Segment3' ref={segment3Ref}>
      <div className='TextContainer'>
        <h1>Portfolio</h1>
        <h3>Lorem Ipsum</h3>
      </div>
    </div>

    <div className='Segment4' ref={segment4Ref}>
      <div className='TextContainer'>
        <h1>Contact Me</h1>
        <h3>Feel free to reach out on LinkedIn :&#41;</h3>
      </div>
    </div>
    </>
  )
}