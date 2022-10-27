import React from 'react'
import matchaimg from '../images/matchaimg.png'
// import ba from '../images/ba.png';
import { Row, Col, Card, Container, Button, Navbar } from 'react-bootstrap';
import { AiTwotoneMinusCircle } from "react-icons/ai";
import Navheader from '../Navheader';
import Footer from '../Footer';
import ContactForm from '../ContactForm';

const ProductsPage = () => {
  const showContact=()=>{
    let modal = document.getElementById("contact_modal")
    // modal.style.display="flex";
    modal.style.visibility="visible";
    console.log("hello");
  }
  const closeContact=()=>{
    let modal = document.getElementById("contact_modal")
    // modal.style.display="flex";
    modal.style.visibility="hidden";
    console.log("hello");
  }
  return (
    <div>
    <section id='ProductsPage'>
    <Navheader  classname={"pages"} /> 
    <Row md="12" className="productionpagerow1" >
       <div className="productspagesection1">
           <Col md="6">
           <img className="productpagemainimage"src={matchaimg}/>
           </Col>
           <Col md="6" className="productionpagecol1" >
            <h1 className="productioncolh1">
               Green Tea Powder
            </h1>
            <p className="productioncolp">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci, id mattis tortor at. Posuere amet sit et nullam donec arcu commodo platea. 
            </p>
            <div>
              <p className="productioncolpoints"> 
                  <AiTwotoneMinusCircle/> &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p className="productioncolpoints"> 
                  <AiTwotoneMinusCircle/> &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p  className="productioncolpoints"> 
                  <AiTwotoneMinusCircle/> &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <p  className="productioncolpoints"> 
                  <AiTwotoneMinusCircle/> &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              {/* <a href="#" className='enquire_button specialbutton'> */}
                {/* <Button>Make an enquiery </Button> */}
                <div className='enquire_button2'>
                <Button  onClick={() => showContact()}>Make an enquiery </Button>
                </div>
              {/* </a> */}
            </div>

           </Col>
       </div>
    </Row>
    <Row  className="productionroww">
      <h1 className="productionpageh1">Related Products</h1>
    </Row>
    <Row className="cardrow">
      
                  <Col>
                      <Card className="cardservicepage">
                        <img className="cardimgservicepage"src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                  <Col>
                      <Card className="cardservicepage">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                  <Col>
                      <Card className="cardservicepage">
                        <img className="cardimgservicepage" src={matchaimg}/>
                        <h3 className="cardtitle">Green Tea Powder</h3>
                      </Card>
                  </Col>
                </Row>
      
    
    </section>
   
    <Footer/>
    <div className="modal" id="contact_modal">
          <span className='close_button' onClick={() => closeContact()}>X</span>
          {<ContactForm/>} 
        </div>
    </div>
  )
}

export default ProductsPage