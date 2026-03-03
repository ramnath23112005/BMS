import React from 'react'
import logo from '../assets/logo.png'
import { HiHome } from "react-icons/hi2";
import {Link} from 'react-router-dom'

const Bloom = () => {
  return (
    <div style={{minHeight:'200vh', margin:0}} className='BloomPage' >
        
        <div className='BloomBanner' >
          <div className='bloomNav'>
          <Link to='/'><HiHome/></Link>
          </div>
            <div className='bloomBannerLogo'>
              <img src={logo} className='Logo'/>
              <div>presents</div>
            </div>
            <div className='bloomBannerHead'>Bloom</div>
            <div className='bloomBannerText'>
              <div className='bloomBannerText1'>IPU's First</div>
              <div className='bloomBannerText2'>Mental Health Fest</div>
            </div>
        </div>
      {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScKLukV1j-3A4SFZtZDDH0SwsW2vgelkSjg06wtU-FeTNVDbQ/viewform?embedded=true" width="700" height="520" frameborder="0" marginheight="0" marginwidth="0" className='googleForm'>Loading…</iframe> */}
      <div className='aboutBloom'>
      <h1 className='aboutBloomHead'>What is Bloom?</h1>
        <div className='aboutBloomText'>
          
          <p>
          Get ready to immerse yourself in a transformative journey at BLOOM: The Mental Health Festival! 🌸

Designed to uplift and inspire, this two-day event on April 15th and 16th promises a holistic approach to well-being. 🌻🌻

Explore insightful PANEL DISCUSSIONS🎙️🗣️, unleash your creativity with ART THERAPY 🎨, treat yourself to delicious delights at our BAKE SALE🧁 , browse through a diverse range of WELLNESS PRODUCTS at our market 🛍️

Join us at BLOOM: The Mental Health Festival and bloom into a brighter, healthier you! 🌟
          </p>
        
        </div>
        <button className='bloomBtn'>Register Here</button>
      </div>
    </div>
  )
}

export default Bloom
