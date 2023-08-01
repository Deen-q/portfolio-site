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
        <p>Click here to see it *</p>
        </div> {/*End of LocalBuzzContainer*/}
        
        <div className='PokemonAppContainer'>
        <h3><u>Pokemon App</u></h3>
        <img
        className='PokemonAppScreenshot'
        src={PokemonAppImage}
        alt='Screenshot of Pokemon App'
        />
        <p>Click here to see it *</p>
        </div>

        <div className='PokemonAppContainer'>
        <h3><u>This Website</u></h3>
        <img
        className='WebsiteScreenshot'
        src={WebsiteImage}
        alt='Screenshot of Pokemon App'
        />
        <p>Click here to see it *</p>
        </div>
    </div>
    </>
  )
}
