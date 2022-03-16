import React from 'react'
import { NavigationStyled } from '../styles/styledComponents'

export default function navigationbar() {
  return (
    <NavigationStyled>
        <div className="nav_logo">
            <p>sunnyside</p>
        </div>
        <div className="nav_menu">
          <a href="/"> About</a>
          <a href="/">Services</a>
          <a href="/"> Projects</a>
          <a href="/"> Contact</a>
        </div>
    </NavigationStyled>
  )
}
