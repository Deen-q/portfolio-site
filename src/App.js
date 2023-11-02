import React, { useRef } from 'react'
import avatar from './images/avatar.png'
import './App.css'
import githubCat from './images/githubCat.png'
import linkedinIcon from './images/linkedinIcon.png'
import IconGallery from './components/IconGallery'
import PortfolioGallery from './components/PortfolioGallery'
import Footer from './Footer.js'

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
      <button onClick={handleContactBtnClick}>Contact</button>
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
        <h3>A Molecular Biologist and Microbiologist, who traded genetic engineering for fullstack development.</h3>

        <h3>My time at the <a href='https://www.schoolofcode.co.uk/' target='_blank' rel='noopener noreferrer'>SoC</a> helped reinforce the idea that by breaking down problems, there is nothing you can't learn.</h3>

        <h3>Hobbies: gaming, gym (powerlifting), swimming and stoic philosophy.</h3>
        <h2><u>Tech Stack:</u></h2>
        <IconGallery />
        <p>...And more. Check my out <a href='https://github.com/Deen-q'>GitHub</a> to see new technologies I'm experimenting with.</p>
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

    <Footer />
    </>
  )
}