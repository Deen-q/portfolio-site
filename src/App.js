import React, { useRef } from 'react'
import avatar from "./images/avatar.png"
import './App.css'
import githubCat from "./images/githubCat.png"
import linkedinIcon from "./images/linkedinIcon.png"
import ImageGallery from './components/ImageGallery'

export default function App() {
  const segment1Ref = useRef(null);
  const segment2Ref = useRef(null);
  const segment3Ref = useRef(null);
  const segment4Ref = useRef(null);

  // function handleHomeBtnClick() {
  //   segment1Ref.current.scrollIntoView({ behavior: 'smooth'});
  // };

  function handleHomeBtnClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

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
    <h1>Hi, I'm Deen</h1>
    <h3>...with 2 e's.</h3>
    <h2>A Full Stack Web Developer.</h2>

      <div className='LinkedinGitHub_IconContainer'>
      <a href="https://www.youtube.com/watch?v=AKGrmY8OSHM" target="_blank" rel="noopener noreferrer">
        <img src={githubCat} 
        className='githubCat' alt='GitHub Icon'/>
        </a>

        <a href="https://www.youtube.com/watch?v=AKGrmY8OSHM" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon}
        className='linkedinIcon' alt='LinkedIn Icon'/>
        </a>
        <h3>Pssst, the <u>icons</u> above are clickable</h3>
        
      </div> {/*End of IconContainer*/}

    </div> {/*End of TextContainer*/}

        <div className="AvatarContainer">
    <img className="AvatarImg" src={avatar} alt="SoC Avatar"/>
        </div>
    </div> {/*End of Segment1 div*/}


    <div className='Segment2' ref={segment2Ref}>
      <div className='TextContainer'>
        <h2><u>About me</u></h2>
        <h3>I have a background in Molecular and Microbiology, which I will always love. But I needed something more hands on that would offer me a means to actually BUILD things. Enter programming.</h3>
        <h3>Following an intense 16-week Bootcamp via the School of Code, I thoroughly enjoyed constant challenge that presented itself - be it unforgiving logical problems or championing a healthy, agile team environment. I am currently on the hunt for a junior role - *something* I am good at, 'bad' at, it doesn't matter - bring me a challenge! <u>Anything</u> can be learned.</h3>
        <h3><u>Hobbies:</u> (PC) gaming, gym, swimming and stoic philosophy.</h3>
        <h2><u>Tech Stack:</u></h2>
        <ImageGallery />
        <p>(Check my <a href='https://www.youtube.com/watch?v=AKGrmY8OSHM'>GitHub</a> to see new technologies I'm experimenting with)</p>
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
        <h3>Feel free to reach out on <a href='https://www.youtube.com/watch?v=AKGrmY8OSHM'>LinkedIn</a> :&#41;</h3>
        <p>Please tell me that you found me on my website before connecting. </p>
        <p>To prevent spam, I do not offer my phone number, unless for job search-related purposes. Thank you :&#41;</p>
          <div className='LinkedinIconContainer'>
        <a href="https://www.youtube.com/watch?v=AKGrmY8OSHM" target="_blank" rel="noopener noreferrer">
        <img src={linkedinIcon}
        className='linkedinIcon2' alt='LinkedIn Icon'/>
        </a>
        </div>
      </div> {/*end of TextContainer, in Segment4*/}
    </div> {/*end of Segment4*/}
    </>
  )
}