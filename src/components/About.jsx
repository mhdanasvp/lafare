import React,  { useEffect } from 'react'
import image3 from './images/image3.png'
import { Row, Col, Container, Button } from 'react-bootstrap';
// import "./MediaQrs.css"
import { FaAngleRight } from "react-icons/fa"




const About = () => {



  return (

   

    <section id='About'>
      <Container >
        <Row className="align-items-center abt-con" >
          <Col className="left mb-5" md="6">
            <h3 className="section_sub_title">
            About us
              
              
            </h3>
            <h2 className="section_title">
            Where Culture and Taste Fly Overseas
              
            </h2>
            <p className="content">
            A team of four young graduates from different backgrounds came up with an idea of serving the world with Traditional Indian Culture and Taste.
           
            </p>
            <div className=''>
          <span className='learn_more'><a href='#'>Read more... <FaAngleRight /></a></span>
        </div>
          </Col>
          <Col className="right md-6 image-3">
            <img className="image3 " src={image3} />
            {/* {image} */}
          </Col>
        </Row>
      </Container>
    </section>
    

  )
}

export default About