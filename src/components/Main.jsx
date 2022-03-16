import React from 'react'
import { ArticleStyled, MainStyled } from '../styles/styledComponents'
import image from '../images/desktop/image-transform.jpg'
import standout from '../images/desktop/image-stand-out.jpg'
import photography from '../images/desktop/image-photography.jpg'
import graphicdesign from '../images/desktop/image-graphic-design.jpg'

export default function Main() {
  return (
    <MainStyled>
        <ArticleStyled> 
            <h2>Transform your brand</h2>
            <p>We are a full-service creative agency specializing in helping brands grow fast. 
            Engage your clients through compelling visuals that do most of the marketing for you.</p>
            <h3>Learn more</h3>
        </ArticleStyled>
        <img src={image} alt="" />
        <img src={standout} alt="" />
        <ArticleStyled>
            <h2>Stand out to the right audience</h2>
            <p>Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. </p>
           <h3>Learn more</h3>
        </ArticleStyled>
        <div>
            <img src={graphicdesign} alt="cherry" />
            <ArticleStyled>
            <h3>Graphic design</h3>
               <p> Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
               </p>
            </ArticleStyled>
        </div>
        <div>
            <img src={photography} alt="clementin" />
            <ArticleStyled>
            <h3> Photography</h3>
              <p>Increase your credibility by getting the most stunning, high-qualityphotos that improve your business image.</p>
            </ArticleStyled>
        </div>
    </MainStyled>
  )
}
