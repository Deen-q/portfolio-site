import '../../App.css';
import './NavBar.css';

export default function NavBar({ aboutRef, portfolioRef }) {
    // const portfolioRef = useRef(null);

    const handleClick = (segment) => {
        segment.current.scrollIntoView({ behavior: 'smooth' });
    }

    const handleHomeClick = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const handleContactClick = () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }

    return (
        <>
            <div className='navBar'>
                <div className='navBarButtons'>
                    <button onClick={handleHomeClick}>Home</button>
                    <button onClick={() => handleClick(aboutRef)}>About</button>
                    <button onClick={() => handleClick(portfolioRef)}>Portfolio</button>
                    <button onClick={handleContactClick}>Contact</button>
                </div>
            </div>
        </>
    )
}