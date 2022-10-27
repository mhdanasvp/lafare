import React  from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import Ellipse from './images/Ellipse.png'
import Ellipse2 from './images/Ellipse2.png'
import Ellipse3 from './images/Ellipse3.png'
// import test2 from './images/test2.png'
// import testt from './images/testt.jpg'
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// import "./MediaQrs.css"
import { MdOutlineHorizontalRule } from "react-icons/md"


const Testimonials = () => {
  

  return (
    <section id='Testimonials'>
      <Container className=''>
        <Row className='top_row' style={{marginBottom:'10%'}}>
          <Col md="6" >
            <h3 className="section_sub_title" style={{marginTop:'22%'}}>
              Testimonials
              
            </h3>
            <h2 className="section_title">
            What they say <br/>about us
           
            </h2>
           
          </Col>
        </Row>
  
        <Row >
   
        <Col md="4">
            <Card className='testimonialcard'>
              {/* <img src={test2} /> */}
              <p className="content">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan, tempus at nunc, sit tempus.” 
              </p>
              <div className='stars'>
                <div className="img">
                <img src={Ellipse} alt=""/>
                </div>
                <div className="descrription">
                  <h3 className="designatn">
                    Designer Dayat 
                  </h3>
                  <h6 className="designation">
                  Business Manager, H&M
                  </h6>
                </div>
              
              
              
              </div>
            </Card>
          </Col>


          <Col md="4">
            <Card className='testimonialcard'>
              {/* <img src={test2} /> */}
              <p className="content">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan, tempus at nunc, sit tempus.” 
              </p>
              <div className='stars'>
                <div className="img">
                <img src={Ellipse2} alt=""/>
                </div>
                <div className="descrription">
                  <h3 className="designatn">
                    Designer Dayat 
                  </h3>
                  <h6 className="designation">
                  Business Manager, H&M
                  </h6>
                </div>
              
              
              
              </div>
            </Card>
          </Col>

          <Col md="4">
            <Card className='testimonialcard'>
              {/* <img src={test2} /> */}
              <p className="content">
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan, tempus at nunc, sit tempus.” 
              </p>
              <div className='stars'>
                <div className="img">
                <img src={Ellipse3} alt=""/>
                </div>
                <div className="descrription">
                  <h3 className="designatn">
                    Designer Dayat 
                  </h3>
                  <h6 className="designation">
                  Business Manager, H&M
                  </h6>
                </div>
              
              
              
              </div>
            </Card>
          </Col>

        </Row>
        <div className='' style={{marginTop:'5%'}}>
          <span className='horizontal'> <MdOutlineHorizontalRule /> <MdOutlineHorizontalRule/><MdOutlineHorizontalRule/> <MdOutlineHorizontalRule/></span>
        </div>
      </Container>

    </section>
  )
}

export default Testimonials