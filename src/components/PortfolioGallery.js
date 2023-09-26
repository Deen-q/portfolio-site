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
          <h3><u>LocalBuzz</u> - <a href='https://youtu.be/70ITr3OtF5gdemo'> Demo Video!</a></h3>

          <a href='https://local-buzz.netlify.app/' target="_blank" rel="noopener noreferrer">
          <img 
        className='LocalBuzzScreenshot'
        src={LocalBuzzImage} 
        alt='Screenshot of LocalBuzz App'
          />
          </a> {/*End of anchor tag*/}

          <p className="description">Five week Full Stack project with a team of 6! Note: can be a little slow to display events.</p>
        </div> {/*End of LocalBuzzContainer*/}
        
        <div className='PokemonAppContainer'>
          <h3><u>Pokemon App</u></h3>

          <a href='https://github.com/Deen-q/pokemonApp'>
          <img
        className='PokemonAppScreenshot'
        src={PokemonAppImage}
        alt='Screenshot of Pokemon App'
          />
          </a>
          <p className="description">Incomplete - looking to increase functionality: favourite button, teambuilder, local storage etc.</p>
        </div>

        <div className='PokemonAppContainer'>
        <h3><u>Portfolio/Personal Website</u></h3>
        <img
        className='WebsiteScreenshot'
        src={WebsiteImage}
        alt='Screenshot of Pokemon App'
        />
        <p className="description">Where you are right now. Built with React, from <u>scratch</u>; no templates here.</p>
        </div>
    </div>
    </>
  )
}
