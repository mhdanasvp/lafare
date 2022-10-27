import React from 'react'
import bb from '../images/bb.png';
// import ba from '../images/ba.png';
import { Row, Col, Card,Container } from 'react-bootstrap';
import matchaimg from '../images/matchaimg.png'
import Navheader from '../Navheader';
import Footer from '../Footer';

const ServicesPage = () => {
  return (
    <>
        
        <Navheader   classname={"pages"}/>
       
        <section id='ServicesPage'>
          <div className="first" style={{backgroundImage: `url(${bb})`}}  >
            <h1 className="firsth1">Where Culture and Taste Fly Overseas</h1>
          </div>
            <Container className="firstrow">
                <Row  className="cardrow">
                  <Col>
                      <Card className="cardservicepage  card425">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                  <Col>
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                  <Col>
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                </Row>
                <Row className="cardrow">
                  <Col>
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage"src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                  <Col>
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                  <Col>
                      <Card className="cardservicepage card425">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                </Row>
            </Container>
    </section>
          
    <Footer/>
  </>
  )
}

export default ServicesPage