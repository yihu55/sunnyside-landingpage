import React from 'react'
import milkbottles from '../images/desktop/image-gallery-milkbottles.jpg'
import cone from '../images/desktop/image-gallery-cone.jpg'
import orange from '../images/desktop/image-gallery-orange.jpg'
import sugarcubes from '../images/desktop/image-gallery-sugarcubes.jpg'

export default function ImageAside() {
  return (
    <div className='imageGallery'>
       <img src={milkbottles} alt="milkbottle" />
       <img src={orange} alt="orange" />
       <img src={cone} alt="cone" />
       <img src={sugarcubes} alt="sugarcubes" />
    </div>
  )
}
