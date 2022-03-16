import React from 'react'
import Aside from '../components/Aside'
import Header from '../components/Header'
import ImageAside from '../components/ImageAside'
import Main from '../components/Main'
import Footer from '../components/Footer'


export default function LandingPage() {
  return (
    <div>
       <Header />

      <Main />
      <Aside />
      <ImageAside />
      <Footer />
   </div>
  )
}
