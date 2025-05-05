
import linkedinIcon from '../images/linkedinIcon.png';
import '../segments/ContactSegment.css';

export default function ContactSegment() {
    return (
        <>
            <div className='contactSegment'>
                <div className='TextContainer'>
                    <h1>Contact Me</h1>
                    <h3>Please send me a message first before sending a LinkedIn Connect request</h3>
                    <p>Enjoy the rest of your day :&#41;</p>
                    <div className='LinkedinIconContainer'>
                        <a href='https://www.linkedin.com/in/deen-qureshi/' target='_blank' rel='noopener noreferrer'>
                            <img src={linkedinIcon}
                                className='linkedinIcon' alt='LinkedIn Icon' />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}
