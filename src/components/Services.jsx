import React  from 'react'
import { Row, Col, Container, Card } from 'react-bootstrap';
import image4 from './images/image4.png'
import image5 from './images/image5.png'
import image6 from './images/image6.png'
import image7 from './images/image7.png'
import one from './images/one.png'
import two from './images/two.png'
import three from './images/three.png'
import four from './images/four.png'
// import "./MediaQrs.css"


const Services = () => {
  
  return (
    <section id='Services'>
                  <h3 className="section_sub_title  specialtitle sp-tit-1" >
            Our Services
              
            </h3>
      <Container className="serv-sec" style={{backgroundImage: `url(${image7})`}}>
        {/* <Row>
          <Col classname="">
            <h3 className="section_sub_title  specialtitle" >
            Our Services
              
            </h3>
            
          </Col>
        </Row> */}
        <Row className="cardservicelandingpage cards my-4" >
          <Col className="colq">
          {/* width: '16rem',backgroundColor:'#255E8A',height:'14rem' */}
            <Card id="okok" style={{ backgroundColor:'#255E8A'  }}>
            <Card.Img   className='cardimage'  src={image4}   />
            <Card.Body>
                <Card.Title className='cardtitleser'>Import & Export</Card.Title>
                <Card.Text className='cardtext'>
                We Import and Export food products globally.
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id="okok" style={{ backgroundColor:'#255E8A'}}>
            <Card.Img  className='cardimage'  src={image5}   />
            <Card.Body>
                <Card.Title className='cardtitleser'>Sourcing</Card.Title>
                <Card.Text className='cardtext'>
                We Source food products directly from the farmers, local vendors and manufacturers.
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card id="okok" style={{backgroundColor:'#255E8A' }}>
            <Card.Img  className='cardimage'  src={image6}   />
            <Card.Body>
                <Card.Title className='cardtitleser'>Distribution</Card.Title>
                <Card.Text className='cardtext'>
                We distribute the food products across the world.
                </Card.Text>
            </Card.Body>
            </Card>
          </Col>
       
        </Row>
        <Row style={{ marginTop:'5%', marginBottom:'5%'}} >
          <Col >
            <h3 className="section_sub_title specialtitle" >
            Why choose us
              
            </h3>
            
          </Col>
        </Row>
        <Card className="mainbellow"   >
        <Row className='whychoose' >
         
        
          <Col >
          <Card className="cardbellow" style={{borderColor:'white'}}  >
            <Card.Img  className='cardimage'  src={one}   />
            <Card.Body>
                <Card.Title className='cardtitleellow'>Quality</Card.Title>
                <Card.Text className='cardtextbellow'>
                Quality is not just a value for us, it’s an obsession.
                </Card.Text>
            </Card.Body>
            </Card>
            
          </Col>
          <Col >
          <Card className="cardbellow" style={{borderColor:'white'}}  >
            <Card.Img  className='cardimage'  src={two}   />
            <Card.Body>
                <Card.Title className='cardtitleellow'>Care</Card.Title>
                <Card.Text className='cardtextbellow'>
                A great deal of care goes into producing the very best products.
                </Card.Text>
            </Card.Body>
            </Card>
            
          </Col>
          <Col >
          <Card className="cardbellow" style={{borderColor:'white'}} >
            <Card.Img  className='cardimage'  src={three}   />
            <Card.Body>
                <Card.Title  className='cardtitleellow'>Integrity</Card.Title>
                <Card.Text className='cardtextbellow'>
                Demonstrate a commitment to integrity and ethics.
                </Card.Text>
            </Card.Body>
            </Card>
            
          </Col>
          <Col >
          <Card className="cardbellow" style={{borderColor:'white'}} >
            <Card.Img  className='cardimage'  src={four}   />
            <Card.Body>
                <Card.Title className='cardtitleellow'>Passion</Card.Title>
                <Card.Text className='cardtextbellow'>
                Shows pride in our brand and heritage. 
                </Card.Text>
            </Card.Body>
            </Card>
            
          </Col>
        
         
        
        </Row>
        </Card>
        
      </Container>
    </section>
  )
}

export default Services