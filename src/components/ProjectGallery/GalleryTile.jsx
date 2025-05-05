import React from 'react';
import '../../App.css';

export default function GalleryTile({
    divStyles,
    hrefUrl,
    titleText,
    imageStyles,
    imageSrc,
    altText,
    descriptionText,
}) {
    /* 
    - classname
    - url for a tag href (not strictly needed)
    - tile name text
    - image classname
    - image src
    - description text
    */
    return (
        <>
            <div className={divStyles}>
                <h3>
                    <a
                        href={hrefUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {titleText}</a>
                </h3>
                <img
                    className={imageStyles}
                    src={imageSrc}
                    alt={altText}
                />
                <p className="description">
                    {descriptionText}
                </p>
            </div>
        </>
    )
}