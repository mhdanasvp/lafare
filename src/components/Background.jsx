import React from 'react'
// import image2 from  './images/image2.png'
import lafare from  './images/lafare.mp4'


const Background = () => {
  return (
    <div className='Backgroundimage'>
        
        {/* <img  src={image2} style={{width:'100%'}} /> */}
        <video   autoPlay="true" width="100%" muted="true">
        <source src={lafare} type="video/mp4" autoPlay="true" />
        </video>
    </div>
  )
}

export default Background
