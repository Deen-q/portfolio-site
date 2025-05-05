
import PortfolioGallery from '../components/ProjectGallery/ProjectGallery';
import '../segments/PortfolioSegment.css'

export default function PortfolioSegment({ portfolioRef }) {
    return (
        <>
            <div className='portfolioSegment' ref={portfolioRef}>
                <div className='TextContainer'>
                    <h1>Portfolio</h1>
                    <PortfolioGallery />
                </div>
            </div>
        </>
    )
}
