
import IconGallery from '../components/IconGallery/IconGallery';
import '../segments/AboutSegment.css'

export default function AboutSegment({ aboutRef }) {
    return (
        <>
            <div className='aboutSegment' ref={aboutRef}>
                <div className='TextContainer'>
                    <h1>About</h1>
                    <h3>I'm a former Molecular Biologist and Microbiologist</h3>
                    <p>I traded genetic engineering for software engineering...! 🧬</p>
                    {/* <p>Currently employed at Rare!</p> */}
                    <h3>Hobbies:</h3>
                    <ul>
                        <li>Web and UI engineering</li>
                        <li>Gaming (Baldurs Gate 3, Elden Ring, Dofus)</li>
                        <li>Spending quality time with friends/family</li>
                        <li>Powerlifting (currently washed af)</li>
                    </ul>
                    <h3>Tech Stack:</h3>
                    <IconGallery />
                </div>
            </div>
        </>
    )
}
