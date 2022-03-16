import React from 'react'
import { HeaderStyled } from '../styles/styledComponents'
import Navigationbar from './Navigationbar'

export default function header() {
  return (
    <HeaderStyled>
        <Navigationbar/>
        <h1> We are creatives</h1>    
    </HeaderStyled>
  )
}
