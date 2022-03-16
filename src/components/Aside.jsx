import React from 'react'
import Emily from '../images/image-emily.jpg'
import Thomas from '../images/image-thomas.jpg'
import Jennie from '../images/image-jennie.jpg'
import {AsideStyled} from '../styles/styledComponents'
export default function Aside(){
  return (
    <AsideStyled>
        <h4>Client testimonials</h4>
        <div className='recension'>
            <div>
                <img src={Emily} alt="emily" className='thumbnail' />
                <p>We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.</p>
                <p>Emily R.</p>
                <p>Marketing Director</p>
            </div>
            <div>
                <img src={Thomas} alt="thomas" className='thumbnail' />
                <p>Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.</p>
                <p>Thomas S.</p>
                <p>Chief Operating Officer</p>
            </div>
            <div>
                <img src={Jennie} alt="jennie"  className='thumbnail'/>
                <p>Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!</p>
                <p>Jennie F.</p>
                <p>Business Owner</p>
            </div>
        </div>
    </AsideStyled>
    

  )
}
