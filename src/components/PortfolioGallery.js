import React from 'react'
import './PortfolioGallery.css'
import LocalBuzzImage from '../images/LocalBuzzScreenshot.png'
import PokemonAppImage from '../images/EarlyPokemonApp.png'
import WebsiteImage from '../images/PortfolioWebsite.png'
import AWS_Guide from '../images/AWS_Guide.png'

export default function PortfolioGallery() {
  return (
    <>
    <div className='PortfolioParentDiv'>
    {/*-------------------------------------------------*/}
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

    {/*-------------------------------------------------*/}
        
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

    {/*-------------------------------------------------*/}

        <div className='WebsiteContainer'>
        <h3><u>Portfolio/Personal Website</u></h3>
        <img
        className='WebsiteScreenshot'
        src={WebsiteImage}
        alt='Screenshot of Pokemon App'
        />
        <p className="description">Built with React, from <u>scratch</u>; no or libraries templates here 👀. This card is not clickable - you're already here!</p>
        </div>

    {/*-------------------------------------------------*/}

        <div className='AWS_Guide_Container'>
          <h3><u>DynamoDB CRUD Guide</u></h3>

          <a href='https://github.com/Deen-q/DynamoDB_Guide' target="_blank" rel="noopener noreferrer">
          <img 
        className='AWS_GuideScreenshot'
        src={AWS_Guide} 
        alt='Screenshot of DynamoDB Guide README'
          />
          </a>
          <p className="description">Open-source beginners guide for CRUD operations onto a DynamoDB table, via Lambda functions (with IAM roles).</p>
        </div>

    {/*-------------------------------------------------*/}
    </div>
    </>
  )
}
