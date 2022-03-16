import React from 'react'
import { FooterStyled } from '../styles/styledComponents'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import pinterest from '../images/icon-pinterest.svg'

export default function footer() {
  return (
    <FooterStyled>
      <div>
        <h4>sunnyside</h4>
      </div>
      <div className='contacts'>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Projects</a>
      </div>  
      <div className='icons'>
        <a href="#"><img src={facebook} alt="facebook" className='icon' /></a>
        <a href="#"><img src={instagram} alt="instagram" className='icon' /></a>
        <a href="#"><img src={twitter} alt="twitter" className='icon' /></a>
        <a href="#"><img src={pinterest} alt="pinterest" className='icon' /></a>

      </div>
    </FooterStyled>
  )
}
