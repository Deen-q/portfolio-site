import { useRef } from 'react';
import Footer from './components/Footer/Footer.js';
import HomeSegment from './segments/HomeSegment.jsx';
import AboutSegment from './segments/AboutSegment.jsx';
import PortfolioSegment from './segments/PortfolioSegment.jsx';
import ContactSegment from './segments/ContactSegment.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import './App.css';

export default function App() {
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <NavBar aboutRef={aboutRef} portfolioRef={portfolioRef} />
      <HomeSegment />
      <AboutSegment aboutRef={aboutRef} />
      <PortfolioSegment portfolioRef={portfolioRef} />
      <div ref={contactRef} >
        <ContactSegment />
        <Footer />
      </div>
    </>
  )
}
