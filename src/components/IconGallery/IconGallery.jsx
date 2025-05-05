
import javascriptIcon from '../../images/javascript.png';
import typeScriptIcon from '../../images/typescript.png';
import reactIcon from '../../images/react.png';
import solidJS from '../../images/solidjs.svg';
import storybookJS from '../../images/storybookjs.png';
import nodejsIcon from '../../images/nodejs.png';
import jestIcon from '../../images/jest.png';
import awsIcon from '../../images/aws.png';
import mongodbIcon from '../../images/mongodb.png';
import figmaIcon from '../../images/figma.png';
import './IconGallery.css';

export default function IconGallery() {
  // could fix like with PortfolioGallery x GalleryTile, low priority
  return (
    <div className='stackIconContainer'>
      <div className='iconTile'>
        <img src={javascriptIcon} alt='Javascript Icon' />
        <p>Javascript</p>
      </div>
      <div className='iconTile'>
        <img src={typeScriptIcon} alt='Javascript Icon' />
        <p>TypeScript</p>
      </div>
      <div className='iconTile'>
        <img src={reactIcon} alt='Javascript Icon' />
        <p>React</p>
      </div>
      <div className='iconTile'>
        <img src={solidJS} alt='Javascript Icon' />
        <p>SolidJS</p>
      </div>
      <div className='iconTile'>
        <img src={storybookJS} alt='Javascript Icon' />
        <p>StorybookJS</p>
      </div>
      <div className='iconTile'>
        <img src={nodejsIcon} alt='Javascript Icon' />
        <p>NodeJS</p>
      </div>
      {/* need RTL as well */}
      <div className='iconTile'>
        <img src={jestIcon} alt='Javascript Icon' />
        <p>Jest</p>
      </div>
      <div className='iconTile'>
        <img src={awsIcon} alt='Javascript Icon' />
        <p>AWS</p>
      </div>
      <div className='iconTile'>
        <img src={mongodbIcon} alt='Javascript Icon' />
        <p>MongoDB</p>
      </div>
      <div className='iconTile'>
        <img src={figmaIcon} alt='Javascript Icon' />
        <p>Figma</p>
      </div>
    </div>
    // <>
    //   <div className='horiScroll'>
    //     <table>
    //       <thead>
    //         <tr>
    //           <th><img src={javascriptIcon}></img></th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <td><p>hi</p></td>
    //       </tbody>
    //     </table>
    //   </div>
    // </>
  );
}
