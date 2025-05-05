
import { useRef } from 'react';
import avatar from '../images/avatar.png';
import githubCat from '../images/githubCat.png';
import linkedinIcon from '../images/linkedinIcon.png';
import '../segments/HomeSegment.css'

export default function HomeSegment() {
  const homeRef = useRef(null);

  return (
    <>
      <div className='homeSegment' ref={homeRef}>
        <div className='homeSegmentText'>
          <h1>Hi, I'm Deen</h1>
          <h2>...with 2 e's</h2>
          <h2>Junior Frontend Dev</h2>

          <div>
            <a href='https://github.com/Deen-q' target='_blank' rel='noopener noreferrer'>
              <img src={githubCat}
                className='githubCat' alt='GitHub Icon' />
            </a>

            <a href='https://www.linkedin.com/in/deen-qureshi/'>
              <img src={linkedinIcon}
                className='linkedinIcon' alt='LinkedIn Icon' />
            </a>
            <h3>Pssst, the <u>icons</u> above are clickable</h3>
          </div>
        </div>

        <div className='avatarContainer'>
          <img className='avatarImg' src={avatar} alt='SoC Avatar' />
        </div>
      </div>
    </>
  )
}
