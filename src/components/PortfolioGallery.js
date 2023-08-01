import React from 'react'
import './PortfolioGallery.css'
import LocalBuzzImage from '../images/LocalBuzzScreenshot.png'
import PokemonAppImage from '../images/EarlyPokemonApp.png'
import WebsiteImage from '../images/EarlyPortfolioWebsite.png'

export default function PortfolioGallery() {
  return (
    <>
    <div className='PortfolioParentDiv'>
        <div className='LocalBuzzContainer'>
        <h3><u>LocalBuzz</u></h3>
        <img 
        className='LocalBuzzScreenshot'
        src={LocalBuzzImage} 
        alt='Screenshot of LocalBuzz App'
        />
        <p>Five week Full Stack project with a team of 6! Note: can be a little slow to display events.</p>
        </div> {/*End of LocalBuzzContainer*/}
        
        <div className='PokemonAppContainer'>
        <h3><u>Pokemon App</u></h3>
        <img
        className='PokemonAppScreenshot'
        src={PokemonAppImage}
        alt='Screenshot of Pokemon App'
        />
        <p>Incomplete - looking to increase functionality: favourite button, teambuilder, local storage etc.</p>
        </div>

        <div className='PokemonAppContainer'>
        <h3><u>Portfolio/Personal Website</u></h3>
        <img
        className='WebsiteScreenshot'
        src={WebsiteImage}
        alt='Screenshot of Pokemon App'
        />
        <p>Built with React.js. </p>
        </div>
    </div>
    </>
  )
}
