import React from "react";
import "./PortfolioGallery.css";
import LocalBuzzImage from "../images/LocalBuzzScreenshot.png";
import PokemonAppImage from "../images/PokeFinderScreenshot.png";
import WebsiteImage from "../images/PortfolioWebsite.png";
import AWS_Guide from "../images/AWS_Guide.png";
import CSharpAzure from "../images/CSharpAzure.png";

export default function PortfolioGallery() {
  return (
    <>
      <p>
        <u>Click on the cards</u> to see the hosted sites (and the <b>titles</b>{" "}
        to see their <b>respective GitHub repositories</b>), <i>if available</i>{" "}
        😁.
        <br />
        <br />
        Right click the images/cards and select <i>'Open Image in new tab'</i> if you
        wish to see what the image looks like in full.
      </p>
      <div className="PortfolioParentDiv">
        {/*-------------------------------------------------*/}
        <div className="CSharpAzureContainer">
          <h3>
            <a
              href="https://github.com/Deen-q/FirstCSharpApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              C# Azure Order Processor</a> (not hosted)
          </h3>
          <img
            className="CSharpAzureScreenshot"
            src={CSharpAzure}
            alt="Screenshot of LocalBuzz App"
          />
          {/*End of anchor tag*/}
          <p className="description">
            <b>Current project:</b> I'm currently in the <b>early</b> stages for a 'warm-up' project using C#, Azure
            Storage Emulator and Azure Storage Explorer to enqueue messages. The messages then trigger a <b>local Azure Function</b>. <u>Prelude to my <b>Azure Service Bus</b> app with C#.</u>
          </p>
        </div>{" "}
        {/*End of CSharpAzureContainer*/}
        {/*-------------------------------------------------*/}
        <div className="AWS_Guide_Container">
          <h3>
            <a
              href="https://github.com/Deen-q/DynamoDB_Guide"
              target="_blank"
              rel="noopener noreferrer"
            >
              AWS DynamoDB CRUD Guide</a> (GitHub)
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
            I created an <b>Open-source</b> beginners guide for CRUD operations onto a DynamoDB
            table, via <b>Lambda functions</b> (including IAM roles). The purpose was to learn AWS, practise documentation and help others at the same time. <b>Complete with code snippets</b>.
          </p>
        </div>
        {/*-------------------------------------------------*/}
        <div className="LocalBuzzContainer">
          <h3>
            <a
              href="https://github.com/Deen-q/SwampySyntax"
              target="_blank"
              rel="noopener noreferrer"
            >
              LocalBuzz
            </a>{" "}
            |
            <a href="https://youtu.be/70ITr3OtF5gdemo" className="demoClass">
              {" "}
              (Demo Video)
            </a>
          </h3>
          <a
            href="https://local-buzz.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="LocalBuzzScreenshot"
              src={LocalBuzzImage}
              alt="Screenshot of LocalBuzz App"
            />
          </a>{" "}
          {/*End of anchor tag*/}
          <p className="description">
            Full Stack project with a team of 6 developers, following the entire app development cycle (aside from scaling and launching).
            <br></br>
            <b>
              Check out ENTIRE the app life cycle in with the 'Demo Video'
              above!
            </b>{" "}
            <br/><u>Note:</u> app can be slow to display events; allow time for servers to wake up.
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
            Built with React, from <u>scratch</u>; no templates or libraries here 👀. Check out the <b>useRef (hook)</b> buttons the top of the site. This card
            is not clickable - you're already here! 
            <br></br><b>Feedback</b> is encouraged 😁
          </p>
        </div>
        {/*-------------------------------------------------*/}
      </div>
    </>
  );
}
