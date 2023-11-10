import React from "react";
import "./PortfolioGallery.css";
import LocalBuzzImage from "../images/LocalBuzzScreenshot.png";
import PokemonAppImage from "../images/PokeFinderScreenshot.png";
import WebsiteImage from "../images/PortfolioWebsite.png";
import AWS_Guide from "../images/AWS_Guide.png";

export default function PortfolioGallery() {
  return (
    <>
      <p>
        Click on the cards to see the hosted sites (and the titles to see their
        respective GitHub repositories) 😁
      </p>
      <div className="PortfolioParentDiv">
        {/*-------------------------------------------------*/}
        <div className="LocalBuzzContainer">
          <h3><a href="https://github.com/Deen-q/SwampySyntax"
              target="_blank"
              rel="noopener noreferrer">
              LocalBuzz</a> |

            <a href="https://youtu.be/70ITr3OtF5gdemo"
            className="demoClass"
            > (Demo Video)</a>
          </h3>
          <a href="https://local-buzz.netlify.app/" target="_blank"
          rel="noopener noreferrer">
            <img
              className="LocalBuzzScreenshot"
              src={LocalBuzzImage}
              alt="Screenshot of LocalBuzz App"
            />
          </a>{" "}
          {/*End of anchor tag*/}
          <p className="description">
            Five week Full Stack project with a team of 6.
            <br></br>
            <b>
              Check out ENTIRE the app life cycle in with the 'Demo Video'
              above!
            </b>{" "}
            Note:app can be a little slow to display events.
          </p>
        </div>{" "}
        {/*End of LocalBuzzContainer*/}
        {/*-------------------------------------------------*/}
        <div className="PokemonAppContainer">
          <h3>
            <a
              href="https://github.com/Deen-q/PokeFinder"
              target="_blank"
              rel="noopener noreferrer"
            >
              PokéFinder
            </a>
          </h3>

          <a href="https://pokefinder-deen-q.vercel.app/">
            <img
              className="PokemonAppScreenshot"
              src={PokemonAppImage}
              alt="Screenshot of Pokemon App"
            />
          </a>
          <p className="description">
            One of my early React apps. Completed and put to one side so I can
            focus on new projects relevant to industry.
          </p>
        </div>
        {/*-------------------------------------------------*/}
        <div className="WebsiteContainer">
          <h3>
            <u>Personal Website</u>
          </h3>
          <img
            className="WebsiteScreenshot"
            src={WebsiteImage}
            alt="Screenshot of Website homepage"
          />
          <p className="description">
            Built with React, from <u>scratch</u>; no or libraries templates
            here 👀. Check out the useRef buttons the top of the site. This card
            is not clickable - you're already here!
          </p>
        </div>
        {/*-------------------------------------------------*/}
        <div className="AWS_Guide_Container">
          <h3>
            <a
              href="https://github.com/Deen-q/DynamoDB_Guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              DynamoDB CRUD Guide
            </a>
          </h3>

          <a
            href="https://github.com/Deen-q/DynamoDB_Guide"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="AWS_GuideScreenshot"
              src={AWS_Guide}
              alt="Screenshot of DynamoDB Guide README"
            />
          </a>
          <p className="description">
            Open-source beginners guide for CRUD operations onto a DynamoDB
            table, via Lambda functions (with IAM roles). Both links lead to the
            same place 🤯
          </p>
        </div>
        {/*-------------------------------------------------*/}
      </div>
    </>
  );
}
