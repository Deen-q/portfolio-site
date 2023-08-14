import React, { useRef } from 'react'
import avatar from './images/avatar.png'
import './App.css'
import githubCat from './images/githubCat.png'
import linkedinIcon from './images/linkedinIcon.png'
import IconGallery from './components/IconGallery'
import PortfolioGallery from './components/PortfolioGallery'

export default function App() {
  const Home_SegmentRef = useRef(null);
  const About_SegmentRef = useRef(null);
  const Portfolio_SegmentRef = useRef(null);
  const Contact_SegmentRef = useRef(null);

  // function handleHomeBtnClick() {
  //   Home_SegmentRef.current.scrollIntoView({ behavior: 'smooth'});
  // };

  function handleHomeBtnClick() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function handleAboutBtnClick() {
    About_SegmentRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  function handlePortfolioBtnClick() {
    Portfolio_SegmentRef.current.scrollIntoView({ behavior: 'smooth'});
  };

  function handleContactBtnClick() {
    Contact_SegmentRef.current.scrollIntoView({ behavior: 'smooth'});
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

    <div className='Home_Segment' ref={Home_SegmentRef}>
        <div className='TextContainer'>
    <h1>Hi, I'm Deen</h1>
    <h3>...with 2 e's.</h3>
    <h2>A Full Stack Web Developer.</h2>

      <div className='Linkedin&GitHub_IconContainer'>
      <a href='https://github.com/Deen-q' target='_blank' rel='noopener noreferrer'>
        <img src={githubCat} 
        className='githubCat' alt='GitHub Icon'/>
        </a>

        <a href='https://www.linkedin.com/in/deen-qureshi/'>
        <img src={linkedinIcon}
        className='linkedinIcon' alt='LinkedIn Icon'/>
        </a>
        <h3>Pssst, the <u>icons</u> above are clickable</h3>
        
      </div> {/*End of LinkedinGitHub_IconContainer*/}

    </div> {/*End of TextContainer*/}

        <div className='AvatarContainer'>
    <img className='AvatarImg' src={avatar} alt='SoC Avatar'/>
        </div>
    </div> {/*End of Home_Segment div*/}


    <div className='About_Segment' ref={About_SegmentRef}>
      <div className='TextContainer'>
        <h1>About me</h1>
        <h3>I have a background in Molecular Biology and Microbiology, which I will always love. But I needed something more hands on that would offer me a means to actually BUILD things. Enter programming.</h3>

        <h3>During an intense 16-week <a href='https://www.schoolofcode.co.uk/' target='_blank' rel='noopener noreferrer'>Bootcamp</a>, I learned a lot - be it unforgiving logical problems or championing a healthy, agile team environment; it required tremendous amounts of perseverance, but I enjoyed it all... Now, I am currently on the hunt for a junior role - front end, back end, something I am good at, something I'm not so good at at, it doesn't matter - bring me a challenge! <u>Anything</u> can be learned.</h3>

        <h3>Looking forward to working with genuine people to build great things!</h3>
        <h3><u>Hobbies:</u> (PC) gaming, gym, swimming and stoic philosophy.</h3>
        <h2><u>Tech Stack:</u></h2>
        <IconGallery />
        <p>(Check my out <a href='https://github.com/Deen-q'>GitHub</a> to see new technologies I'm experimenting with)</p>
      </div>
    </div>

    <div className='Portfolio_Segment' ref={Portfolio_SegmentRef}>
      <div className='TextContainer'>
        <h1>Portfolio</h1>
        <PortfolioGallery/>
      </div>
    </div>

    <div className='Contact_Segment' ref={Contact_SegmentRef}>
      <div className='TextContainer'>
        <h1>Contact Me</h1>
        <h3>Feel free to reach out on <a href='https://www.linkedin.com/in/deen-qureshi/'>LinkedIn</a> :&#41;</h3>
        <p>Enjoy the rest of your day :&#41;</p>
          <div className='LinkedinIconContainer'>
        <a href='https://www.linkedin.com/in/deen-qureshi/' target='_blank' rel='noopener noreferrer'>
        <img src={linkedinIcon}
        className='linkedinIcon2' alt='LinkedIn Icon'/>
        </a>
        </div>
      </div> {/*end of TextContainer, in Contact_Segment*/}
    </div> {/*end of Contact_Segment*/}
    </>
  )
}