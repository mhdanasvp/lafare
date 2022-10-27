import React from 'react'

import image3 from '../images/image3.png';
import image333 from '../images/image333.png'
import image33 from '../images/image33.png'
import ba from '../images/ba.png';
import { Row, Col, Container, Button, Navbar } from 'react-bootstrap';
import Services from '../Services';
// import Navheader from '../Navheader';
import Navheader from '../Navheader';
import Footer from '../Footer';
const AboutSingle = () => {
  return (
    <div>
        
    
    <section id='AboutSingle'>
    <Navheader classname={"pages"} /> 
      
      
      <div className="first" style={{backgroundImage: `url(${ba})`}}  >
          <h1 className="firsth1">Where Culture and Taste Fly Overseas</h1>
      </div>


    {/* <Row style={{backgroundImage: `url(${ba})`, marginTop:'10%'}}>
          <h1>Where Culture and Taste Fly Overseas</h1>
        </Row> */}
      <Container className="topsingle" >
        
      <Row className=" align-items-center" >
          <Col className="left mb-5" md="6">
            <h3 className="section_sub_title">
            About us
            </h3>
            <p className="content">
            A team of four young graduates from different backgrounds came up with an idea of serving the world with Traditional Indian Culture and Taste.
           
            </p>
            <div className=''>
        </div>
          </Col>
          <Col className="  right px-5" md="6">
            <img className="image33 " src={image3} />
            {/* {image} */}
          </Col>
        </Row>
        <Row className="align-items-center aboutsinglepage2ndimage" >
          <Col className="  right px-5" md="6" >
            <img className="image33 " src={image33} />
            {/* {image} */}
          </Col>
          <Col className="left mb-5" md="6">
            <h3 className="section_sub_title">
            Mission
            </h3>
            <p className="content">
            We are so glad to present our most delicious food items  which are healthy and ready to eat with in minutes. We focus on building an easy time saving method to those around the world who have busy schedules and no time to cook. We solve the problem by bringing you  our traditional ready to eat line up.
           
            </p>
            <div className=''>
        </div>
          </Col>
          
        </Row>
        <Row className="align-items-center"  >
          <Col className="left mb-5" md="6">
            <h3 className="section_sub_title">
            Vision
            </h3>
            <p className="content">
            Our vision is to bring the real authentic taste and culture from India to people across the world.  

            </p>
            <div className=''>
        </div>
          </Col>
          <Col className="  right px-5" md="6">
            <img className="image33 " src={image333} />
            {/* {image} */}
          </Col>
        </Row>
      </Container>
      <Services style={{backgroundImage:'none'}}/>
    </section>
   
    <Footer/>
    </div>
  )
}

export default AboutSingle