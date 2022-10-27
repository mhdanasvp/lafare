import React from 'react'
import Navheader from './Navheader'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Background from './Background';
import About from './About';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from './Footer';
import Popup from './Popup';
// import AboutSingle from './pages/AboutSingle';



const Main = () => {
  return (
    <div>
        
    <Navheader />
    <Background/>
    <About/>
    <Services/>
    <Testimonials/>
    <Contact/>
    <Footer/>

  {/* <Popup/> */}
    
    </div>
  )
}

export default Main