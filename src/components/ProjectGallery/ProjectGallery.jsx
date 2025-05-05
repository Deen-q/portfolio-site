import React from "react";
import WebsiteImage from "../../images/PortfolioWebsite.png";
import LocalBuzzImage from "../../images/LocalBuzzScreenshot.png";
import PokemonAppImage from "../../images/PokeFinderScreenshot.png";
import AWS_Guide from "../../images/AWS_Guide.png";
import CSharpAzure from "../../images/CSharpAzure.png";
import GalleryTile from "./GalleryTile";
import TileText from "../../textcontent/TileText";
import "./ProjectGallery.css";

export default function ProjectGallery() {
  return (
    <>
      <p>
        Current projects are hidden, for now.
      </p>
      <div className="PortfolioParentDiv">
        {/* PITA, converting to GalleryTile, fully knowing Ill be commenting most of them out lul #maintainable */}

        <GalleryTile
          divStyles={"WebsiteContainer"}
          // hrefUrl={""} // would like to handle this better, within GalleryTile, even if this is valid js
          titleText={<u>Personal Website</u>}
          imageStyles={"WebsiteScreenshot"}
          imageSrc={WebsiteImage}
          altText={"Screenshot of..."}
          descriptionText={TileText.PortfolioSite}
        />

        {/* Below: Turned off, potentially indefinitely */}

        {/* <GalleryTile
          divStyles={"CSharpAzureContainer"}
          hrefUrl={"https://github.com/Deen-q/FirstCSharpApp"}
          titleText={"C# Azure Order Processor(not hosted)"}
          imageStyles={"CSharpAzureScreenshot"}
          imageSrc={CSharpAzure}
          altText={"Screenshot of..."}
          descriptionText={TileText.CSharpAzure}
        /> */}
        {/* <GalleryTile
          divStyles={"AWS_Guide_Container"}
          hrefUrl={"https://github.com/Deen-q/DynamoDB_Guide"}
          titleText={"AWS DynamoDB CRUD Guide"}
          imageStyles={"AWS_GuideScreenshot"}
          imageSrc={AWS_Guide}
          altText={"Screenshot of..."}
          descriptionText={TileText.AWSDynamo}
        /> */}
        {/* <GalleryTile
          divStyles={"LocalBuzzContainer"}
          hrefUrl={"https://github.com/Deen-q/SwampySyntax"}
          titleText={"LocalBuzz"}
          imageStyles={"LocalBuzzScreenshot"}
          imageSrc={LocalBuzzImage}
          altText={"Screenshot of..."}
          descriptionText={TileText.LocalBuzz}
        /> */}
        {/* github vs hosted */}
        {/* "https://pokefinder-deen-q.vercel.app/" */}
        {/* <GalleryTile
          divStyles={"PokemonAppContainer"}
          hrefUrl={"https://github.com/Deen-q/PokeFinder"}
          titleText={"PokéFinder"}
          imageStyles={"PokemonAppScreenshot"}
          imageSrc={PokemonAppImage}
          altText={"Screenshot of..."}
          descriptionText={TileText.Pokefinder}
        /> */}
      </div>

      {/* >>>> probs ditch the <a>, clicking image is intuitive */}

    </>
  );
}
